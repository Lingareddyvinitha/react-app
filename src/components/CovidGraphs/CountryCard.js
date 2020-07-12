import React from 'react'
import LazyLoad from 'react-lazyload'
import { withRouter } from 'react-router-dom'
import { observable, isObservable } from 'mobx'
import { observer } from 'mobx-react'

@observer
class CountryCard extends React.Component {
   @observable isHover = false
   @observable isDetailesClicked = false
   constructor(props) {
      super(props)
   }
   // navigateToCountryDetailsPage = () => {
   //    const { history } = this.props
   //    history.push({
   //       pathname: `/DashBoard/Details/:${this.props.countryDetails.alpha3Code}`
   //    })
   // }
   onChangeHover = () => {
      this.isHover = !this.isHover
   }
   onDetails = () => {
      this.isDetailesClicked = !this.isDetailesClicked
   }

   render() {
      const countryDetails = this.props.countryDetails
      return (
         <div
            className='card'
            // onClick={this.navigateToCountryDetailsPage}
            onMouseEnter={this.onChangeHover}
            onMouseLeave={this.onChangeHover}
         >
            <LazyLoad>
               <img
                  className='flag-size'
                  src={countryDetails.flag}
                  alt='flag-img'
               ></img>
               <p className='country-name'>name:{countryDetails.name}</p>
               <p>population:{countryDetails.population}</p>
               <p>region:{countryDetails.region}</p>
               <p>capital:{countryDetails.capital}</p>
               <p className='hover-info'>it appear when we hover it</p>
               {this.isHover && (
                  <button onClick={this.onDetails}>details</button>
               )}
               {this.isDetailesClicked && (
                  <video controls>
                     <source src='https://www.youthttps://media.w3.org/2010/05/sintel/trailer_hd.mp4ube.com/watch?v=mrqgz4_a4PU' />
                     onMouseOver={e => e.target.play()}
                  </video>
               )}
            </LazyLoad>
         </div>
      )
   }
}
export default withRouter(CountryCard)
