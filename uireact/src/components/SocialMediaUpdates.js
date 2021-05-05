import React from 'react';
import '../scss/social-media-updates.scss'
export const SocialMediaUpdates = () => {
    return (
        <div className="social-media-updates">
            <div className="title">Latest updates</div>
            <div className="group-8">
                <div className="group7">
                    <p>Brand additions</p>
                </div>
                <p>Upcoming tasks</p>
            </div>
            <div className="group-1">
                <MediaTask 
                  img1={()=>(<img src="/images/widgets/TwitterRectangle.svg" alt="Rectangle" />)} 
                  img2={()=>(<img src="/images/widgets/TwitterLogo.svg" alt="Logo" />)}
                  media={`Twitter`}
                  industry={`F&B Industry`}
                  growth={`+987.00`}
                /> 
                <MediaTask 
                  img1={()=>(<img src="/images/widgets/PinterestRectangle.svg" alt="Rectangle" />)} 
                  img2={()=>(<img src="/images/widgets/PinterestLogo.svg" alt="Logo" />)}
                  media={`Pinterest`}
                  industry={`F&B Industry`}
                  growth={`+35.00`}
                /> 
                <MediaTask 
                  img1={()=>(<img src="/images/widgets/LinkedinRectangle.svg" alt="Rectangle" />)} 
                  img2={()=>(<img src="/images/widgets/LinkedinLogo.svg" alt="Logo" />)}
                  media={`LinkedIn`}
                  industry={`F&B Industry`}
                  growth={`+126.00`}
                /> 
            </div>
        </div>
    )
}
export const MediaTask = ({img1, img2, media, industry, growth}) => (
    <div className="group-4">
        <div className="group-3">
            {img1 && img1()}
            {img2 && img2()}
            <div className="group-2">
                <p className="media">{media}</p>
                <p className="industry">{industry}</p>
            </div>
        </div>
        <p className="growth">{growth}</p>
    </div>
)
export const SocialMediaImages = (img1, img2) => {
    return (
        <>
            {img1 && img1()}
            {img2 && img2()}
            {/* <img src="/images/widgets/TwitterRectangle.svg" alt="Rectangle" />
            <img src="/images/widgets/TwitterLogo.svg" alt="Rectangle" /> */}
        </>
    )
}