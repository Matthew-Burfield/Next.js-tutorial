import Layout from '../components/MyLayout'
import Link from 'next/link'
import axios from 'axios'

const PostLink = props => (
	<li>
		<Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
			<a>{props.name}</a>
		</Link>
	<style jsx>{`
			li {
				list-style: none;
				margin: 5px 0;
			}

			a {
				text-decoration: none;
				color: red;
			}

			a:hover {
				opacity: 0.6;
			}
	`}</style>
	</li>
)

const Index = props => (
	<Layout>
		<h1>Batman TV Shows</h1>
		<ul>
			{props.shows.map(({show}) => (
				<PostLink key={show.id} id={show.id} name={show.name} />
			))}
		</ul>
		<style jsx>{`
			h1, a {
				font-family: "Arial";
				color: green;
			}

			ul {
				padding: 0;
			}
		`}</style>
	</Layout>
)

Index.getInitialProps = async function() {
	const data = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
		.then(response => response.data)

	console.log(`Show data detched. Count: ${data.length}`)

	return {
		shows: data,
	}
}

export default Index
