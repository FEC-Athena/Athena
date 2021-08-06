import React, { useState, useContext } from 'react';
import StarRating from './StarRating.jsx';
import ReviewsContext from './reviews-context';
import Context from '../context';
import access from '../config';
import axios from 'axios';

const NewReview = (props) => {
  const { rating, handleCloseModal, renderOption, reviewList } = useContext(ReviewsContext);
  const { currentItem, sortByRel2, prodName, handleSortOption, prodChar } = useContext(Context);

  const handleSubmitRev = (event) => {
    event.preventDefault();
    let alertStr = '';

    if (rating === 0) {
      alertStr += 'Rating star required!\n';
    }

    if (!document.getElementById('recYes').checked && !document.getElementById('recNo').checked) {
      alertStr += 'Recommend product field is required!\n';
    }
    if (prodChar['Size']&&!document.getElementById('size1').checked && !document.getElementById('size2').checked && !document.getElementById('size3').checked && !document.getElementById('size4').checked && !document.getElementById('size5').checked) {
      alertStr += 'Size field is required!\n';
    }
    if (prodChar['Width']&&!document.getElementById('width1').checked && !document.getElementById('width2').checked && !document.getElementById('width3').checked && !document.getElementById('width4').checked && !document.getElementById('width5').checked) {
      alertStr += 'Width field is required!\n';
    }
    if (prodChar['Comfort']&&!document.getElementById('comfort1').checked && !document.getElementById('comfort2').checked && !document.getElementById('comfort3').checked && !document.getElementById('comfort4').checked && !document.getElementById('comfort5').checked) {
      alertStr += 'Comfort field is required!\n';
    }
    if (prodChar['Quality']&&!document.getElementById('quality1').checked && !document.getElementById('quality2').checked && !document.getElementById('quality3').checked && !document.getElementById('quality4').checked && !document.getElementById('quality5').checked) {
      alertStr += 'Quality field is required!\n';
    }
    if (prodChar['Fit']&&!document.getElementById('fit1').checked && !document.getElementById('fit2').checked && !document.getElementById('fit3').checked && !document.getElementById('fit4').checked && !document.getElementById('fit5').checked) {
      alertStr += 'Fit field is required!\n';
    }
    if (prodChar['Length']&&!document.getElementById('length1').checked && !document.getElementById('length2').checked && !document.getElementById('length3').checked && !document.getElementById('length4').checked && !document.getElementById('length5').checked) {
      alertStr += 'Length field is required!\n';
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

    const recmdRadio = () => {
      if(document.getElementById('recYes').checked) {
        return true;
      } else {
        return false;
      }
    }

    let charRating = {};
    for (const key in prodChar) {
      const checked = document.querySelector('input[name=Fit]:checked')
      charRating[prodChar[key].id] = parseInt(checked.value);
    }

    const request = {
      "product_id": currentItem,
      "rating": parseInt(rating),
      "summary": JSON.stringify(document.getElementById("headline").value),
      "body": JSON.stringify(document.getElementById('review-body').value),
      "recommend": recmdRadio(),
      "name": JSON.stringify(document.getElementById('nickname').value),
      "email": JSON.stringify(document.getElementById('email').value),
      "photos": [],
      "characteristics": charRating
    }

    if (alertStr.length > 0) {
      alert(alertStr);
    } else {
      handleCloseModal();

      const config = {
        headers: { Authorization: `${access.TOKEN}` },
      };
      axios.post("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews", request, config)
        .then((response) => {
          alert("submitted");
          })
          .catch((err) => {
          console.log(err);
          })
    }
  }

  const [prevs, setPrevs] = useState([]);
  function handlePrevs(event) {
    setPrevs(prevs => [...prevs, URL.createObjectURL(event.target.files[0])]);
  };

  // const [file, setFile] = useState([null]);

  // let filesArray = [];
  // let FilesCollection = [];
  // function handlePreview(event) {
  //   filesArray.push(event.target.files);
  //   for (let i = 0; i < filesArray[0].length; i++) {
  //     FilesCollection.push(URL.createObjectURL(filesArray[0][i]))
  //     //setPrev(URL.createObjectURL(event.target.files[0]))
  //     }
  //     setPrev({ file: this.FilesCollection })
  // }

  return (props.add) ? (
      <div className="modal">
        <div className="fixedHeader">
          <button className="close-button" onClick={handleCloseModal}>Close</button>
          <h3 className="new-review-header">Write Your Review</h3>
          <div>{prodName}</div>
        </div>
        <div className="scroll-bar">
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

              <div>{prodChar.Size === undefined ? '' :
                <>
                  <div className="radio-box">
                    <label  style={{fontWeight: 'bold'}}>Size</label>
                  </div>
                  <div className="radio-box">
                    <input type="radio" name="size" value={1} id="size1"/>
                    <label>A size too small</label>
                  </div>
                  <div className="radio-box">
                    <input type="radio" name="size" value={2} id="size2"/>
                    <label>1/2 a size too small</label>
                  </div>
                  <div className="radio-box">
                    <input type="radio" name="size" value={3} id="size3"/>
                    <label>Perfect</label>
                  </div>
                  <div className="radio-box">
                    <input type="radio" name="size" value={4} id="size4"/>
                    <label>1/2 a size too big</label>
                  </div>
                  <div className="radio-box">
                    <input type="radio" name="size" value={5} id="size5"/>
                    <label>A size too big</label>
                  </div><br></br>
                </>
              }</div>

              <div>{prodChar.Width === undefined ? '' :
                <>
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
                </>
              }</div>


              <div>{prodChar.Comfort === undefined ? '' :
                <>
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
                </>
              }</div>

              <div>{prodChar.Quality === undefined ? '' :
                <>
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
                </>
              }</div>

              <div>{prodChar.Length === undefined ? '' :
                <>
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
                </>
              }</div>

              <div>{prodChar.Fit === undefined ? '' :
                <>
                  <div className="radio-box">
                    <label style={{fontWeight: 'bold'}}>Fit</label>
                  </div>
                  <div className="radio-box">
                    <input type="radio" name="Fit" value={1} id="fit1" />
                    <label>Runs tight</label>
                  </div>
                  <div className="radio-box">
                    <input type="radio" name="Fit" value={2} id="fit2" />
                    <label>Runs slightly tight</label>
                  </div>
                  <div className="radio-box">
                    <input type="radio" name="Fit" value={3} id="fit3" />
                    <label>Perfect</label>
                  </div>
                  <div className="radio-box">
                    <input type="radio" name="Fit" value={4} id="fit4" />
                    <label>Runs slightly tight</label>
                  </div>
                  <div className="radio-box">
                    <input type="radio" name="Fit" value={5} id="fit5" />
                    <label>Runs tight</label>
                  </div><br></br>
                </>
              }</div>
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
        <div style={{marginBottom: 20, marginTop: 10}}>
          <i style={{marginRight: 5, marginLeft:5}} className="fas fa-camera">{' '}</i>
          <input type="file" onChange={(event) => handlePrevs(event)} />
          <div>{prevs.map((prev, index) => {
            return (
              <img key={index} src={prev} style={{height: 100, padding: 5}}></img>
            )
          })}
          </div>

        </div>

        <div>
          <label  className="nickname" style={{fontWeight: 'bold', marginTop: 10}}>Nickname</label><br></br>
          <textarea id="nickname" maxLength="60" placeholder="Example: jackson11" style={{height: 30, width: 715}}></textarea>
        </div>

        <div>
          <label className="email" style={{fontWeight: 'bold'}}>Email</label><br></br>
          <textarea type="email" id="email" maxLength="60" placeholder="Example: jackson11@email.com" style={{height: 30, width: 715}}></textarea>
          <label></label>
        </div>

        <div onClick={handleSubmitRev} style={{marginLeft: 570, marginTop: 50}}><button style={{height: 40, width: 150, fontSize: 15, marginBottom: 20}}>Submit Review</button></div>
      </div>
      </div>
    ) : '';
}

export default NewReview;