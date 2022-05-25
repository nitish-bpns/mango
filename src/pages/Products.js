import React, { Component } from 'react';

class Products extends Component {

    state = {
        countries: []
    }


    addCountry() {
        this.setState({ countries: [...this.state.countries, ""] })
    }

    render() {
        return (

            <div className='products'>
                <h1>test</h1>
                <label>address</label>
                {this.state.countries.map((country, index) => {
                    return (
                        <div key={index}>
                            {index + 1}

                        </div>
                    )
                })
                }
                <hr />
                <button onClick={(e) => this.addCountry(e)} >add more</button>
            </div>


        );
    }
}
export default Products;
