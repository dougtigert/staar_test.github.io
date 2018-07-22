import React from 'react';
import Action from "./Action";
import Details from "./Details";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {MuiThemeProvider} from "material-ui";

class DetailPage extends React.Component  {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
  }

  state = {
    jsonData: {
      era: "",
      data: []
    },
    selectedDetail: undefined,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
  };

  componentDidMount() {
    const location = this.props.location.pathname;
    if(this.state.jsonData.data.length === 0) {
      switch(location) {
        case "/exploration":
          this.setJsonData(require('../json/socialStudies/exploration'));
          break;
        case "/revolution":
          this.setJsonData(require('../json/socialStudies/revolution'));
          break;
        case "/constitution":
          this.setJsonData(require('../json/socialStudies/constitution'));
          break;
        case "/colonization":
          this.setJsonData(require('../json/socialStudies/colonization'));
          break;
        case "/earlyRepublic":
          this.setJsonData(require('../json/socialStudies/earlyRepublic'));
          break;
        case "/jackson":
          this.setJsonData(require('../json/socialStudies/jackson'));
          break;
        case "/indianRevolution":
          this.setJsonData(require('../json/socialStudies/indianRevolution'));
          break;
        case "/westExpansion":
          this.setJsonData(require('../json/socialStudies/westExpansion'));
          break;
        case "/reform":
          this.setJsonData(require('../json/socialStudies/reform'));
          break;
        case "/sectionalism":
          this.setJsonData(require('../json/socialStudies/sectionalism'));
          break;
        case "/civilWar":
          this.setJsonData(require('../json/socialStudies/civilWar'));
          break;
        case "/reconstruction":
          this.setJsonData(require('../json/socialStudies/reconstruction'));
          break;
      }
    }
  }

  setJsonData = (jsonData) => {
    this.setState(() => ({
      jsonData: jsonData
    }));
  };

  handlePick(row,column,event, x) {
    var data = this.state.jsonData.data[row];

    let year = "";
    let pic = "";
    switch(column) {
      case 2:
        year = "2013";
        pic = data.pic2013;
        break;
      case 3:
        year = "2014";
        pic = data.pic2014;
        break;
      case 4:
        year = "2015";
        pic = data.pic2015;
        break;
      case 5:
        year = "2016";
        pic = data.pic2016;
        break;
      case 6:
        year = "2017";
        pic = data.pic2017;
        break;
    }


    if(column === 0 || column === 1 || pic === "") {
      this.setState(() => ({
        selectedDetail: undefined
      }));
    } else {
      const updatedSelectedDetail = {...this.state.jsonData.data[row], yearSelected: year};
      this.setState(() => ({
        selectedDetail: updatedSelectedDetail
      }));
    }

  }

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedDetail: undefined
    }));
  };

  render() {
   return( <div className="container">
      <div className="detail__details">
        <MuiThemeProvider>
          <Table
            onCellClick= {this.handlePick}>
            height={this.state.height}
            fixedHeader={true}
            fixedFooter={true}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}>
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}>
              <TableRow>
                <TableHeaderColumn className="header__sticky" colSpan="7" style={{textAlign: 'center'}}>
                  <h1>{this.state.jsonData.era}</h1>
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn className="header__sticky">Era Name</TableHeaderColumn>
                <TableHeaderColumn className="header__sticky">Lesson</TableHeaderColumn>
                <TableHeaderColumn className="header__sticky">2013</TableHeaderColumn>
                <TableHeaderColumn className="header__sticky">2014</TableHeaderColumn>
                <TableHeaderColumn className="header__sticky">2015</TableHeaderColumn>
                <TableHeaderColumn className="header__sticky">2016</TableHeaderColumn>
                <TableHeaderColumn className="header__sticky">2017</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}>
              {this.state.jsonData.data.map( (row, index) => (
                <TableRow key={index} className="hoverPointer detailPage__wrap">
                  <TableRowColumn className="detailPage__wrap"style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{row.title}</TableRowColumn>
                  <TableRowColumn>{row.lesson}</TableRowColumn>
                  <TableRowColumn><Action year={row.pic2013 ? "2013" : ""} data={row.pic2013}/></TableRowColumn>
                  <TableRowColumn><Action year={row.pic2014 ? "2014" : ""} data={row.pic2014}/></TableRowColumn>
                  <TableRowColumn><Action year={row.pic2015 ? "2015" : ""} data={row.pic2015}/></TableRowColumn>
                  <TableRowColumn><Action year={row.pic2016 ? "2016" : ""} data={row.pic2016}/></TableRowColumn>
                  <TableRowColumn><Action year={row.pic2017 ? "2017" : ""} data={row.pic2017}/></TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter
              adjustForCheckbox={this.state.showCheckboxes}>
              <TableRow>
                <TableRowColumn colSpan="7" style={{textAlign: 'center'}}>
                </TableRowColumn>
              </TableRow>
            </TableFooter>
          </Table>
        </MuiThemeProvider>
      </div>
     <MuiThemeProvider>
       <Details handleClearSelectedOption={this.handleClearSelectedOption} selectedDetail={this.state.selectedDetail} />
     </MuiThemeProvider>
    </div>
   );
  };
};

export default DetailPage