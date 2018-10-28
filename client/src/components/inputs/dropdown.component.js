class Dropdown extends Component {
    state = {
      items: [],
      selectedItem: []
    }
   
    componentDidMount() {
        let items = Data.rarity.map(item => { 
            console.log(JSON.stringify(item));
            return {value: item.value, display: item.display} 
        });
        this.setState({ items: [{value: '', display: '(Select any rarities)'}].concat(items) });
    }

    addItem(item){
        let itemList = Object.assign({}, this.state.selectedItems); 
        return itemList.push(item);
    }

    render() {
      return (
        <div>
          <select value={this.state.selectedItem} 
                  onChange={(e) => this.setState({selectedItems: addItem(e.target.value)})}>
            {this.state.items.map((item) => <option key={item.value} value={item.value}>{item.display}</option>)}
          </select>
        </div>
      )
    }
  }