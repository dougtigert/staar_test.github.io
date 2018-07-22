import React from 'react';
import Modal from 'react-modal';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import {FlatButton} from "material-ui";

const Details = (props) => {
  const getImage = () => {
    const pic2013 = props.selectedDetail.pic2013;
    const pic2014 = props.selectedDetail.pic2014;
    const pic2015 = props.selectedDetail.pic2015;
    const pic2016 = props.selectedDetail.pic2016;
    const pic2017 = props.selectedDetail.pic2017;


    let year = "";
    switch(props.selectedDetail.yearSelected) {
      case '2013':
        year = pic2013 ? pic2013 : "";
        break;
      case '2014':
        year = pic2014 ? pic2014 : "";
        break;
      case '2015':
        year = pic2015 ? pic2015 : "";
        break;
      case '2016':
        year = pic2016 ? pic2016 : "";
        break;
      case '2017':
        year = pic2017 ? pic2017 : "";
        break;
    }

    return year ? require(`../assets/${year}.png`) : "";
  };

  return <Modal
    isOpen={!!props.selectedDetail}
    contentLabel="Selected Detail"
    ariaHideApp={false}
    onRequestClose={props.handleClearSelectedOption}
    className="modal">
    {props.selectedDetail &&
    <Card>
      <CardTitle title={props.selectedDetail.era} subtitle={props.selectedDetail.title}/>
      <CardMedia>
        <img src={getImage()} alt="" />
      </CardMedia>
      <CardActions>
        <FlatButton onClick={props.handleClearSelectedOption} label="Close"/>
      </CardActions>
    </Card>
    }
  </Modal>
};

export default Details;