import React from 'react';

import {
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share';
const Share = ({ data }) => {

    const shareUrl = `https://bd-flix-e2343.web.app/allmovie/${data.id}`;

    return (
        <div>
            <h1 className="text-center text-xl text-white mb-2">Share Your Post</h1>

            <div className="flex  gap-3 ">
                <FacebookShareButton
                    url={shareUrl}
                    quote={`${data.backdrop_path}`}
                    title={`${data.title}`}


                >
                    <FacebookIcon size={40} round={true} />
                </FacebookShareButton>

                <TwitterShareButton
                    url={shareUrl}
                    quote={'Title or jo bhi aapko likhna ho'}
                    hashtag={`${data.title}`}
                >
                    <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
                <LinkedinShareButton
                    url={shareUrl}
                    quote={'Title or jo bhi aapko likhna ho'}
                    hashtag={`${data.title}`}
                >
                    <LinkedinIcon size={40} round={true} />
                </LinkedinShareButton>

                <WhatsappShareButton
                    url={shareUrl}
                    quote={'Title or jo bhi aapko likhna ho'}
                    hashtag={`${data.title}`}
                >
                    <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>

            </div>
        </div>
    );
};

export default Share;