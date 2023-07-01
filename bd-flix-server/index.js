const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
require('dotenv').config();

//implement jwt token
const jwt = require('jsonwebtoken')

app.use(cors());
app.use(express.json());

//firebase*************************************************

const multer = require("multer");
const firebase = require("firebase/app");
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { query } = require('express');

const firebaseConfig = {
    apiKey: "AIzaSyC6rov5IQ_uuDeY_DRnHhSADgnb3XoukL8",
    authDomain: "bdflix-f2281.firebaseapp.com",
    projectId: "bdflix-f2281",
    storageBucket: "bdflix-f2281.appspot.com",
    messagingSenderId: "259794146141",
    appId: "1:259794146141:web:bab53915941d9a79830eb4"
};
firebase.initializeApp(firebaseConfig);
const storage = getStorage()
const upload = multer({ storage: multer.memoryStorage() });



// upload image------------------------------------------------------------------------

app.post('/uploadPhoto', upload.single("imageFile"), (req, res) => {
    if (!req.file) {
        // No file was uploaded with the request
        res.status(400).send("No file uploaded.");
        return;
    }
    const storageRef = ref(storage, req.file.originalname);
    const metadata = {
        contentType: 'image/jpeg'
    };
    uploadBytes(storageRef, req.file.buffer, metadata)
        .then(() => {
            getDownloadURL(storageRef).then(url => {
                res.send({ url });
            });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send(error);
        });
});


//firebase**********************************************************************

app.get('/', (req, res) => {
    res.send('hello');
})

//verifying jwt token
function verifyfyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send('unauthorized access')
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
        if (err) {
            return res.status(403).send({ message: 'forbidden access' })

        }
        req.decoded = decoded;
        next();

    })


}
// ssl comerce--------------++++++++++++++++++------------------------------
const SSLCommerzPayment = require('sslcommerz-lts')
const store_id = process.env.STORE_ID
const store_passwd = process.env.STORE_PASSWORD
const is_live = false

// ssl comerce--------------++++++++++++++++++------------------------------

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ac1kfa5.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {

        const ComediesCollection = client.db("bdFlix").collection("comedies");
        const allMoviesCollection = client.db("bdFlix").collection("allmovies");
        const allUsers = client.db("bdFlix").collection("user");
        //user collection
        const usersCollection = client.db("bdFlix").collection("user");
        //Reviw collection
        const reviewCollection = client.db("bdFlix").collection("review");
        const usersCollections = client.db("bdFlix").collection("userProfile");
        //Category collection
        const categoryCollection = client.db("bdFlix").collection("category");
        const Watchlist = client.db("bdFlix").collection("watchlist");
        const Historys = client.db("bdFlix").collection("History");
        // Like collection
        const likesCollection = client.db("bdFlix").collection('likes');

        app.get('/mostPopularMovies', async (req, res) => {
            const query = {};
            const sort = { "likeCount": -1 };
            const cursor = await allMoviesCollection.find(query).sort(sort).limit(10);
            const popularMovies = await cursor.toArray();

            res.send(popularMovies);
        })

        app.post('/allmovies', async (req, res) => {
            const allmovies = req.body;
            // Get the highest ID from the existing movie documents
            const highestId = await allMoviesCollection.find({}).sort({ id: -1 }).limit(1).toArray();
            // Set the new ID for the movie document to be inserted
            allmovies.id = highestId.length === 0 ? 0 : highestId[0].id + 1;
            const result = await allMoviesCollection.insertOne(allmovies);
            res.send(result);
        });

        // app.post('/allmovies', async (req, res) => {
        //     const allmovies = req.body;
        //     const result = await allMoviesCollection.insertOne(allmovies);
        //     res.send(result);
        // })

        //  movie upload in mongodb 

        app.post('/addMovie', async (req, res) => {
            const upLoaded = req.body;
            const result = await allMoviesCollection.insertOne(upLoaded)
            res.send(result);
        });


        //  add categories
        app.post('/category', async (req, res) => {
            const category = req.body;
            const result = await categoryCollection.insertOne(category);
            res.send(result);
        })

        //  get categories
        app.get('/category', async (req, res) => {
            const result = await categoryCollection.find({}).toArray();
            res.send(result);
        })

        //   all users get 

        app.get('/allUsers', async (req, res) => {

            const result = await allUsers.find({}).toArray();
            res.send(result);
        })

        // normal log in save data
        app.post('/allUsers', async (req, res) => {
            const users = req.body;
            const result = await allUsers.insertOne(users)
            res.send(result);
        })

        //get current user
        app.get('/allUsers/:id', async (req, res) => {
            const email = req.params.id;
            const query = { email: email };
            const result = await allUsers.findOne(query);
            res.send(result);
        })

        //delete user
        app.delete('/allUsers/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) };
            const result = await allUsers.deleteOne(filter);
            res.send(result);
        })

        // provider log in save data
        app.put('/allUsers/:id', async (req, res) => {
            const email = req.params.id;
            const query = { email: email };
            //checking isSubscribe true or false in mongodb
            let isSubscribe;
            const result = await allUsers.findOne(query);
            if (result?.isSubscribe) {
                isSubscribe = true;
            }
            else {
                isSubscribe = false;
            }

            //update google login user
            const user = req.body;
            const options = { upsert: true }
            const updatedUser = {
                $set: {
                    name: user.name,
                    email: user.email,
                    photoURL: user.photoURL,
                    isSubscribe: isSubscribe
                }

            }
            if (user.email) {
                const result = await allUsers.updateOne(query, updatedUser, options)
                res.send(result)
            }
        })


        //generate token for users
        app.get('/jwt', async (req, res) => {
            const email = req.query.email;
            const query = { email: email }
            const user = await allUsers.findOne(query);
            if (user) {
                const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, { expiresIn: '1h' })
                return res.send({ ACCESS_TOKEN: token })
            }
            console.log(user);
            res.status(403).send({ ACCESS_TOKEN: '' })
        })


        // app.get('/users/:email', async (req, res) => {
        //     const query = {};
        //     const users = await usersCollection.find(query);
        //     const newusers = await users.toArray();
        //     const user = newusers.find(newuser => newuser.email === req.params.email)
        //     res.send(user);
        // })
        //make admin

        app.put('/allUsers/admin/:id', verifyfyJWT, async (req, res) => {
            const decodedEmail = req.decoded.email;
            const query = { email: decodedEmail }
            const user = await allUsers.findOne(query);
            if (user?.role !== 'admin') {
                return res.status(403).send({ message: 'forbidden accces' })
            }

            const id = req.params.id;
            const filter = { _id: ObjectId(id) }
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    role: 'admin'
                }
            }
            const result = await allUsers.updateOne(filter, updatedDoc, options);
            res.send(result);
        });




        //make admin to member
        app.put('/allUsers/deleteAdmin/:id', verifyfyJWT, async (req, res) => {
            const decodedEmail = req.decoded.email;
            const query = { email: decodedEmail }
            const user = await allUsers.findOne(query);
            if (user?.role !== 'admin') {
                return res.status(403).send({ message: 'forbidden accces' })
            }

            const id = req.params.id;
            const filter = { _id: ObjectId(id) }
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    role: ''
                }
            }
            const result = await allUsers.updateOne(filter, updatedDoc, options);
            res.send(result);
        });


        //get admin
        app.get('/allUsers/admin/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email }
            const user = await allUsers.findOne(query);
            res.send({ isAdmin: user?.role === 'admin' });
        })

        //user profile post
        app.post('/userProfile', async (req, res) => {
            const userProfile = req.body;
            const result = await usersCollections.insertOne(userProfile)
            res.send(result);
        })


        //userprofile get
        app.get('/userprofile', async (req, res) => {
            const result = await usersCollections.find({}).toArray();
            res.send(result);
        })
        //update userprofile
        app.put('/userprofile/:id', async (req, res) => {
            const email = req.params.id;
            const query = { email: email };
            const user = req.body;
            const options = { upsert: true }
            const updatedUser = {
                $set: {
                    name: user.name,
                    email: user.email,
                    photoURL: user.photoURL
                }
            }
            if (user.email) {
                const result = await usersCollections.updateOne(query, updatedUser, options)
                res.send(result)
            }
        })

        // update user
        app.put('/user/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) }
            const UserUpdate = req.body;
            const option = { upset: true }
            const updateUser = {
                $set: {
                    name: UserUpdate.name,
                    address: UserUpdate.address,
                    gender: UserUpdate.gender,
                    genre: UserUpdate.genre
                }
            }
            const result = await usersCollection.updateOne(filter, updateUser, option)
            res.send(result)
        })

        // ssl after success----------------------------------
        app.post('/subscribe/:id', async (req, res) => {
            try {
                const email = req.params.id;
                const data = {
                    total_amount: 100,
                    currency: 'BDT',
                    tran_id: new ObjectId().toString(), // use unique tran_id for each api call
                    success_url: `https://bd-flix-server-emonkumardas.vercel.app/payment/success?email=${email}`,
                    fail_url: 'https://bd-flix-e2343.web.app/',
                    cancel_url: 'https://bd-flix-e2343.web.app/',
                    ipn_url: 'http://localhost:3030/ipn',
                    shipping_method: 'Courier',
                    product_name: 'Computer.',
                    product_category: 'Electronic',
                    product_profile: 'general',
                    cus_name: 'Customer Name',
                    cus_email: email,
                    cus_add1: 'Dhaka',
                    cus_add2: 'Dhaka',
                    cus_city: 'Dhaka',
                    cus_state: 'Dhaka',
                    cus_postcode: '1000',
                    cus_country: 'Bangladesh',
                    cus_phone: '01711111111',
                    cus_fax: '01711111111',
                    ship_name: 'Customer Name',
                    ship_add1: 'Dhaka',
                    ship_add2: 'Dhaka',
                    ship_city: 'Dhaka',
                    ship_state: 'Dhaka',
                    ship_postcode: 1000,
                    ship_country: 'Bangladesh',
                };

                const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
                const apiResponse = await sslcz.init(data);
                // Redirect the user to payment gateway
                let GatewayPageURL = apiResponse.GatewayPageURL
                res.send({ url: GatewayPageURL })
            } catch (error) {
                console.log(error);
                res.status(500).send('Something went wrong')
            }
        });


        app.post('/payment/success', async (req, res) => {
            try {
                const email = req.query.email;
                console.log(email);
                const result = await allUsers.updateOne({ email }, {
                    $set: {
                        isSubscribe: true
                    }
                });
                if (result.modifiedCount > 0) {
                    res.redirect(`https://bd-flix-e2343.web.app/payment/success?email=${email}`)
                }
                console.log("payment successful");
            } catch (error) {
                console.log(error);
                res.status(500).send('Something went wrong')
            }
        });

        // ssl after success----------------------------------


        // update user
        app.put('/user/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) }
            const UserUpdate = req.body;
            const option = { upset: true }
            const updateUser = {
                $set: {
                    name: UserUpdate.name,
                    address: UserUpdate.address,
                    gender: UserUpdate.gender,
                    genre: UserUpdate.genre
                }
            }
            const result = await usersCollection.updateOne(filter, updateUser, option)
            res.send(result)
        })


        // all movies get 
        app.get('/allMovie', async (req, res) => {
            const result = await allMoviesCollection.find({}).toArray();
            res.send(result)
        })


        // delete button  
        app.delete('/allMovie/:id', async (req, res) => {
            const { id } = req.params;
            const deleteId = { _id: ObjectId(id) };
            const result = await allMoviesCollection.deleteOne(deleteId);
            res.send(result);
        });

        //   update movie ---------------------
        app.put('/updateMovie/:id', async (req, res) => {


            const id = req.params.id;

            console.log(id)

            const filter = { _id: ObjectId(id) };
            const user = req.body;

            console.log(user)

            const option = { upsert: true };
            const updatedMovie = {
                $set: user,
            }
            const result = await allMoviesCollection.updateOne(filter, updatedMovie, option);
            res.send(result);
        })

        app.get('/MoviesForYou', async (req, res) => {
            const result = await MoviesForYouCategoriCollection.find({}).toArray();
        })

        app.get('/movies', async (req, res) => {
            const result = await allMoviesCollection.find({}).toArray();
            res.send(result);
        })

        app.get('/allsearch', async (req, res) => {
            const result = await allMoviesCollection.find().toArray();
            res.send(result);
        })

        // get movie by category
        app.get('/allmovie/:category', async (req, res) => {
            const allmovies = req.params.category;
            const getmovies = await allMoviesCollection.find({}).toArray();
            const result = await getmovies.filter(getmovie => getmovie.category == allmovies);
            res.send(result);
        })

        app.get('/movie/:id', async (req, res) => {
            const allmovies = req.params.id;
            const getmovies = await allMoviesCollection.find({}).toArray();
            const result = await getmovies.find(getmovie => getmovie.id == allmovies);
            res.send(result);
        })

        app.get('/comedies', async (req, res) => {
            const comedies = await ComediesCollection.find({}).toArray();
            res.send(comedies);
        })

        //watchlist
        app.post('/watchlist', async (req, res) => {
            const item = req.body;
            const result = await Watchlist.insertOne(item);
            res.send(result)


        })
        //getting watchlist
        app.get('/watchlist', async (req, res) => {
            const watchlist = await Watchlist.find({}).toArray()
            res.send(watchlist)
        })

        //delete watchlist


        app.delete('/watchlist/:id', async (req, res) => {
            const { id } = req.params;
            const deleteId = { _id: ObjectId(id) };
            const result = await Watchlist.deleteOne(deleteId);
            res.send(result);
        })


        //cheacking history
        app.post('/history', async (req, res) => {
            const item = req.body;
            const result = await Historys.insertOne(item);
            res.send(result)


        })

        //getting history
        app.get('/history', async (req, res) => {
            const result = await Historys.find({}).toArray()
            res.send(result)
        })


        app.delete('/history/:id', async (req, res) => {
            const { id } = req.params;
            const MovieID = {
                email: id
            };
            const result = await Historys.deleteMany(MovieID);
            res.send(result);
        })

        app.get('/watchlists', async (req, res) => {
            const email = req.query.email;
            const MovieID = req.query.movieid;
            const query = { email: email, MovieID: MovieID }
            const sourob = await Watchlist.findOne(query)
            // res.send(sourob)
            res.send(sourob)
        })

        //----------- check isLiked or not-----

        app.get('/isLiked', async (req, res) => {
            const email = req.query.email;
            const postId = req.query.postId;
            const query = { userEmail: email, videoId: postId }
            const cursor = await likesCollection.findOne(query);
            res.send(cursor);
        })


        app.get('/numoflike', async (req, res) => {
            const postId = req.query.postId;
            const query = { _id: postId }
            const cursor = await allMoviesCollection.findOne(query);

            res.send(cursor);
        })


        //----------- LIKE -------------

        app.post('/likes', async (req, res) => {
            const likes = req.body;
            const result = await likesCollection.insertOne(likes);
            res.send(result);
        })

        app.put('/videoLike', async (req, res) => {
            const postId = req.body.id;
            const increase = req.body.increase;
            const query = { _id: postId };
            const options = { upsert: true };
            const result = await allMoviesCollection.updateOne(query, { $inc: { likeCount: increase } },);
            res.send(result);
        })

        //----------- UNLIKE -------------
        app.delete('/likes', async (req, res) => {
            const email = req.body.userEmail;
            const videoId = req.body.videoId;
            const query = { userEmail: email, videoId: videoId }
            const result = await likesCollection.deleteOne(query);
            if (result.deletedCount === 1) {
                res.send(true);
            }
        })



        //----------- check isLiked or not-----

        app.get('/isLiked', async (req, res) => {
            const email = req.query.email;
            const postId = req.query.postId;

            const query = { userEmail: email, videoId: postId }


            const cursor = await likesCollection.findOne(query);
            res.send(cursor);
        })


        app.get('/numoflike', async (req, res) => {
            const postId = req.query.postId;
            const query = { _id: postId }
            const cursor = await allMoviesCollection.findOne(query);

            res.send(cursor);
        })


        //----------- LIKE -------------

        app.post('/likes', async (req, res) => {
            const likes = req.body;
            const result = await likesCollection.insertOne(likes);
            res.send(result);
        })

        app.put('/videoLike', async (req, res) => {
            const postId = req.body.id;
            const increase = req.body.increase;
            const query = { _id: postId };
            const options = { upsert: true };
            const result = await allMoviesCollection.updateOne(query, { $inc: { likeCount: increase } },);
            res.send(result);
        })

        //----------- UNLIKE -------------
        app.delete('/likes', async (req, res) => {
            const email = req.body.userEmail;
            const videoId = req.body.videoId;
            const query = { userEmail: email, videoId: videoId }
            const result = await likesCollection.deleteOne(query);
            if (result.deletedCount === 1) {
                res.send(true);
            }
        })



        // reviews collection of users
        app.post('/review', async (req, res) => {
            const review = req.body;
            const result = await reviewCollection.insertOne(review);
            res.send(result);
        });
        // app.post('/like', async (req, res) => {
        //     const review = req.body;
        //     const result = await likeCollection.insertOne(review);
        //     res.send(result);
        // });



        //save user email and generate JWT token
        app.put('/user/:email', async (req, res) => {
            const email = req.params.email
            const user = req.body
            const filter = { email: email }
            const options = { upsert: true }
            const updateDoc = {
                $set: user,
            }
            const result = await usersCollection.updateOne(filter, updateDoc, options)
            const token = jwt.sign(user, process.env.ACCESS_TOKEN,
                { expiresIn: '1d' })
            res.send({ result, token })
        })

        app.post('/uploadVideo', upload.single("filename"), (req, res) => {
            if (!req.file) {
                // No file was uploaded with the request
                res.status(400).send("No file uploaded.");
                return;
            }
            const storageRef = ref(storage, req.file.originalname);
            const metadata = {
                contentType: 'video/mp4'
            };
            uploadBytes(storageRef, req.file.buffer, metadata)
                .then(() => {
                    getDownloadURL(storageRef).then(url => {
                        res.send({ url });
                    });
                })
                .catch(error => {
                    console.error(error);
                    res.status(500).send(error);
                });
        });


        //   get device ip user--------------------------------------------
        app.get('/check-user', async (req, res) => {
            const { email, deviceId } = req.query;
            const user = await usersCollection.findOne({ email: email, deviceId: deviceId });
            const userExists = Boolean(user);
            res.send({ userExists });
        });
        //   get device ip user-------------------------------------






    }


    finally { }

}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`listening on ${port}`);
})
