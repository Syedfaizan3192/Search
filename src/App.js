import react from 'react'
import Searchbar from './components/searchbar'
import axios from 'axios'
import Imageview from './components/images'
import Heading from './components/heading'
// import './season.css'


class App extends react.Component {
    state = { images: [] }
    onSearchSubmit = async (term) => {
        // console.log(term)
        const response = await
            axios.get('https://api.unsplash.com/search/photos', {
                params: { query: term },
                headers: {
                    Authorization:
                        'Client-ID r_KokkGmNfhziLJOvta4S4-D7otw55MOJ4QN8nCDcIg'
                }
            })
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className='ui container'>
                <Heading heading = {'Search Here'}/>
                <Searchbar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <Imageview Images={this.state.images} />
            </div>
        )
    }
}
export default App