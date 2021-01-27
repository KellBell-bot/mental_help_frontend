className="flex items-center bg-gray-800 p-3 flex-wrap"

state = {
        search: this.props.practData
    }


    onSearchHandler = () => {
        let results = []
        this.props.practData.filter((pract)=> {
            let current = pract.filter_issues.map(issue => issue.title);
            // let results = []
            let matches =  current.forEach(issue => {
                if (issue.includes(this.props.inputText)){
                    results.push(pract)
                    return pract
                }
            })
            
            // return results
            })
            console.log()
        this.setState({
            search: results
        }) 
    }
    render(){    
        // const issues= this.props.practData.map((pract)=> (pract.filter_issues.map(array => console.log(array.title))))
        // console.log(this.props.practData)
        // ^^ loop through all practioners
        // map titles to array 

    //    console.log(this.props.practData)
    return (
        <div>
            <button type="button" className="btn btn-light mr-right px-4 pt-2" onClick={this.onSearchHandler}>Search</button>
            {this.state.search.map((pract) => 
            <PractitionerCard key={pract?.id} practitioner={pract} /> )} 
        </div>
       
    )}
}