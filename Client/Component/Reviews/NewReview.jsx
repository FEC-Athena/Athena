import React, { useContext } from 'react';
import StarRating from './StarRating.jsx';
import ReviewsContext from './reviews-context';
import Context from '../context';
import access from '../config';
import axios from 'axios';

const NewReview = (props) => {
  const { rating, handleCloseModal, renderList } = useContext(ReviewsContext);
  const { currentItem, sortByRel2 } = useContext(Context);

  const handleSubmitRev = (event) => {
    event.preventDefault();
    let alertStr = '';

    if (rating === 0) {
      alertStr += 'Rating star required!\n';
    }

    if (!document.getElementById('recYes').checked && !document.getElementById('recNo').checked) {
      alertStr += 'Recommend product field is required!\n';
    }
    if (!document.getElementById('size1').checked && !document.getElementById('size2').checked && !document.getElementById('size3').checked && !document.getElementById('size4').checked && !document.getElementById('size5').checked) {
      alertStr += 'Size field is required!\n';
    }
    if (!document.getElementById('width1').checked && !document.getElementById('width2').checked && !document.getElementById('width3').checked && !document.getElementById('width4').checked && !document.getElementById('width5').checked) {
      alertStr += 'Width field is required!\n';
    }
    if (!document.getElementById('comfort1').checked && !document.getElementById('comfort2').checked && !document.getElementById('comfort3').checked && !document.getElementById('comfort4').checked && !document.getElementById('comfort5').checked) {
      alertStr += 'Comfort field is required!\n';
    }
    if (!document.getElementById('quality1').checked && !document.getElementById('quality2').checked && !document.getElementById('quality3').checked && !document.getElementById('quality4').checked && !document.getElementById('quality5').checked) {
      alertStr += 'Quality field is required!\n';
    }
    if (!document.getElementById('fit1').checked && !document.getElementById('fit2').checked && !document.getElementById('fit3').checked && !document.getElementById('fit4').checked && !document.getElementById('fit5').checked) {
      alertStr += 'Fit field is required!\n';
    }
    const reviewLen = document.getElementById('review-body').value.length;
    if (reviewLen < 50) {
      alertStr += `Characters left for review: ${50 - reviewLen}` + '\n';
    }

    if (!document.getElementById('nickname').value.length === 0) {
      alertStr += 'nickname field is required!\n';
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(document.getElementById('email').value).toLowerCase())) {
      alertStr += 'Invalid email format!';
    }

    // if (alertStr.length > 0) {
    //   alert(alertStr);
    // } else {
    //   handleCloseModal;
    // }


    // const radioRec = document.querySelector('input[name="genderS"]:checked').value;
    //console.log("radioRec: ", radioRec);
    // const radio = (name) => {
    //   const radios = document.getElementsByName(name);

    //   for (var i = 0; i < radios.length; i++) {
    //     if (radios[i].checked) {
    //       return radios[i].value
    //     }
    // }
    // }

    const postmanPost = {
      "product_id": 17067,
      "rating": 5,
      "summary": "JUST LOVE IT",
      "body": "hey what are you waiting for",
      "recommend": true,
      "name": "nickname",
      "email": "sdjfelewf@gmail.com",
      "photos": [],
      "characteristics": {
          "57222": 4,
          "57223": 5,
          "57224": 3,
          "57225": 5
      }
    }


    axios.post("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews", postmanPost, {
      headers: { 'Authorization': `${access.TOKEN}` }
    })
      .then((response) => {
        //console.log("OMG");
        //console.log("hello ",response);
        const newRev =
          {
            'product_id': 17067,
            'rating': rating,
            'summary': 'LOVE IT',
            'body': 'HAPPY',
            'recommend': true,
            'name': 'pineapple',
            'email': 'pineapple@email',
            'photos': 'photos',
            'characterstics': {
              "57222": 4,
              "57223": 5,
              "57224": 3,
              "57225": 5
            }
          }
        sortByRel2.unshift(newRev)
        renderList('relevant');
      })
      .catch((err) => {
      console.log(err);
    })

  }

  return (props.add) ? (
      <div className="modal">
        <button className="close-button" onClick={handleCloseModal}>Close</button>
        <h3 className="new-review-header">Write Your Review</h3>
        <div>Camo Onesie</div>
        <div className="overall-rating" style={{color: 'red', marginTop: 20}}>Your overall rating of this product</div>

        <div><StarRating /></div>
        <div id="recommend" style={{marginTop:10}} className="recommend-choice" name="recommend">Do you recommend this product?</div>
        <form>
          <input type="radio" name="choice" id="recYes" value='true'/>
          <label>Yes</label>
          <input type="radio" name="choice" id="recNo" value='false'/>
          <label>No</label><br></br>
        </form>

        <div className="char-container" style={{ marginTop: 20, marginBottom: 10, fontWeight: 400 }}>Characteristics</div>
        <div className="character">
          <div className="pl-holder"></div>
            <form>
              <div style={{ fontWeight: 'bold' }}>
                <div className="radio-box"><label>Scores</label></div>
                <div className="radio-box"><label>1</label></div>
                <div className="radio-box"><label>2</label></div>
                <div className="radio-box"><label>3</label></div>
                <div className="radio-box"><label>4</label></div>
                <div className="radio-box"><label>5</label></div><br></br>
              </div>

              <div className="radio-box">
                <label  style={{fontWeight: 'bold'}}>Size</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="size" score={1} id="size1"/>
                <label>A size too small</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="size" score={2} id="size2"/>
                <label>1/2 a size too small</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="size" score={3} id="size3"/>
                <label>Perfect</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="size" score={4} id="size4"/>
                <label>1/2 a size too big</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="size" score={5} id="size5"/>
                <label>A size too big</label>
              </div><br></br>

              <div className="radio-box">
                <label style={{fontWeight: 'bold'}}>Width</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="width" score={1} id="width1"/>
                <label>Too Narrow</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="width" score={2} id="width2"/>
                <label>Slightly narrow</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="width" score={3} id="width3"/>
                <label>Perfect</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="width" score={4} id="width4"/>
                <label>Slightly wide</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="width" score={5} id="width5"/>
                <label>Too wide</label>
              </div><br></br>

              <div className="radio-box">
                <label style={{fontWeight: 'bold'}}>Comfort</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Comfort" score={1} id="comfort1"/>
                <label>Uncomfortable</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Comfort" score={2} id="comfort2"/>
                <label>Slightly uncomfortable</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Comfort" score={3} id="comfort3"/>
                <label>Ok</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Comfort" score={4} id="comfort4"/>
                <label>Comfortable</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Comfort" score={5} id="comfort5"/>
                <label>Perfect</label>
              </div><br></br>

              <div className="radio-box">
                <label style={{fontWeight: 'bold'}}>Quality</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Quality" score={1} id="quality1"/>
                <label>Poor</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Quality" score={2} id="quality2"/>
                <label>Below average</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Quality" score={3} id="quality3"/>
                <label>What I expect</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Quality" score={4} id="quality4"/>
                <label>Pretty great</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Quality" score={5} id="quality5"/>
                <label>Perfect</label>
              </div><br></br>

              <div className="radio-box">
                <label style={{fontWeight: 'bold'}}>Length</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Length" score={1} id="length1" />
                <label>Runs short</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Length" score={2} id="length2" />
                <label>Runs slightly short</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Length" score={3} id="length3" />
                <label>Perfect</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Length" score={4} id="length4" />
                <label>Runs slightly long</label>
              </div>
              <div className="radio-box">
                <input type="radio"  name="Length" score={5} id="length5" />
                <label>Runs long</label>
              </div><br></br>

              <div className="radio-box">
                <label style={{fontWeight: 'bold'}}>Fit</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Fit" score={1} id="fit1" />
                <label>Runs tight</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Fit" score={2} id="fit2" />
                <label>Runs slightly tight</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Fit" score={3} id="fit3" />
                <label>Perfect</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Fit" score={4} id="fit4" />
                <label>Runs slightly tight</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="Fit" score={5} id="fit5" />
                <label>Runs tight</label>
              </div><br></br>
          </form><br></br><br></br>
        </div>

        <div>
          <label className="review-sum" style={{fontWeight: 'bold'}}>Headline</label><br></br>
          <textarea id="headline" maxLength="60" placeholder="Example: Best purchase ever!" style={{height: 30, width: 715}}></textarea>
        </div>

        <div>
          <label  className="review-body" style={{fontWeight: 'bold'}}>Review</label><br></br>
          <textarea  id="review-body" maxLength="1000" placeholder="Why did you like the product or not?" style={{height: 100, width: 715}}></textarea>
        </div>

        <label><i className="fas fa-camera">{' '}Add your photos</i></label>
        <input type="file" name="image-upload" id="select-photo" accept=".jpg, .jpeg, .png"
        />
        <button style={{width: 200, height: 40, fontSize: 15}}>
        <i className="fas fa-camera">{' '}Add your photos</i>
        </button><br></br><br></br>

        <div>
          <label  className="nickname" style={{fontWeight: 'bold'}}>Nickname</label><br></br>
          <textarea id="nickname" maxLength="60" placeholder="Example: jackson11" style={{height: 30, width: 715}}></textarea>
        </div>

        <div>
          <label className="email" style={{fontWeight: 'bold'}}>Email</label><br></br>
          <textarea id="email" maxLength="60" placeholder="Example: jackson11@email.com" style={{height: 30, width: 715}}></textarea>
          <label></label>
        </div>

        <div onClick={handleSubmitRev} style={{marginLeft: 570, marginTop: 50}}><button style={{height: 40, width: 150, fontSize: 15}}>Submit Review</button></div>
      </div>
    ) : '';
}

export default NewReview;