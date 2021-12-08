import React from 'react'
import AlertTweet from '../../Post/AlertTweet'

const Footer = () => {
    return (
        <div>
			<AlertTweet/>
            <div className="footer">
		<p className="pull-left">
			 Copyright &copy; 2017 Your Website Name
		</p>
		<p className="pull-right">
			 Mediumish Theme by <a target="_blank" href="https://www.wowthemes.net">WowThemes.net</a>
		</p>
		<div className="clearfix">
		</div>
	</div>
        </div>
    )
}

export default Footer
