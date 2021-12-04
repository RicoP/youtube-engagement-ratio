var last_number_of_likes = -1
var like_node_child = null

setInterval(function() { 
	let q_views = ".ytd-video-view-count-renderer";
	let q_likes = "ytd-toggle-button-renderer.ytd-menu-renderer:nth-child(1) > a:nth-child(1) > yt-formatted-string:nth-child(2)";

	if(document.querySelectorAll(q_likes).length > 0) {
		var node_views = document.querySelector(q_views);
		var node_likes = document.querySelector(q_likes);
		var views = Number(node_views.innerText.replace( /\D+/g, '') )
		var likes = Number(node_likes.getAttribute("aria-label").replace( /\D+/g, '') )

		if(likes != last_number_of_likes) {
			var vl_ratio = 100 * likes / views

			if(like_node_child) {
				like_node_child.remove();
			}

			like_node_child = node_likes.appendChild(document.createElement('span'));
			like_node_child.innerText += " (" + (Math.round(vl_ratio)) + "%)";

			last_number_of_likes = likes;
		}
	}
}, 100)

