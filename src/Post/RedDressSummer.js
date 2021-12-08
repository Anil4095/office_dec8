import React from 'react'
import { Link } from 'react-router-dom'

const RedDressSummer = () => {
    return (
        <div>
            <div className="col-md-4">
				<div className="card">
					<Link href="post.html">
					<img className="img-fluid img-thumb" src="assets/img/demopic/7.jpg" alt=""/>
					</Link>
					<div className="card-block">
						<h2 className="card-title"><Link href="post.html">Little red dress and a perfect summer</Link></h2>
						<div className="metafooter">
							<div className="wrapfooter">
								<span className="meta-footer-thumb">
								<Link href="author.html"><img className="author-thumb" src="https://www.gravatar.com/Linkvatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"/></Link>
								</span>
								<span className="author-meta">
								<span className="post-name"><Link href="author.html">Sal</Link></span><br/>
								<span className="post-date">22 July 2017</span><span className="dot"></span><span className="post-read">6 min read</span>
								</span>
								<span className="post-read-more"><Link href="post.html" title="Read Story"><svg className="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg></Link></span>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default RedDressSummer
