import Layout from '../components/MyLayout'
import axios from 'axios'

const Post = props => (
	<Layout>
		<h1>{props.show.name}</h1>
		<p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
		<img src={props.show.image.medium} />
	</Layout>
)

Post.getInitialProps = async function (context) {
	const { id } = context.query
	const show = await axios.get(`https://api.tvmaze.com/shows/${id}`)
		.then(response => response.data)

	console.log(`Fetched show: ${show.name}`)

	return { show }
}

export default Post

