import React from 'react'
import { Link } from 'react-router-dom'

const AlertTweet = () => {
    return (
        <div>
            <div className="container margtop3rem">
<a className="twitter-grid" href="https://twitter.com/TwitterDev/timelines/539487832448843776">WowThemesNet Tweets</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

<div className="alertbar">
	<div className="container text-center">
		<img src="assets/img/logo.png" alt=""/> &nbsp; Never miss a <b>story</b> from us, get weekly updates in your inbox. <Link href="/" className="btn subscribe">Get Updates</Link>
	</div>
</div>
        </div>
    )
}

export default AlertTweet
