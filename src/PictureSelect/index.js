import React from 'react'
import css from './index.module.scss'
class SelectPic extends React.Component {
    state = {
        selects: [...this.props.value],
        renList:this.props.pictures
    }
    handleCheck = ({ id }) => {
      this.setState(({ selects }) => ({ 
        selects: selects.includes(id)
          ? selects.filter(item => item !== id)
          : [...selects, id],
      }))
      this.props.onChange(id)
    }
    selectAll = () => {
        if (this.state.selects.length!==3) {
            this.refs.selectAll.innerHTML = "√"
            this.setState(({ renList }) => ({
                selects: renList.map(item => item.id),
            }))
        }else{
            this.refs.selectAll.innerHTML = ""
            this.setState(() => ({
                selects: [],
            }))
        }
    }

    render() {
      const { selects: selects, renList } = this.state
      console.log(selects)
      return (
        <div className={css.box}>
          {
            this.state.selects.length===3?
            <div onClick={this.selectAll} ref="selectAll" className={css.selectAll}>√</div>
            :<div onClick={this.selectAll} ref="selectAll" className={css.selectAll}></div>
          }
          <div className={css.imgCons}>
                {
                    renList.map(item => (
                        <div key={item.id} className={css.sunKind} onClick={() => this.handleCheck(item)}>
                            {
                                selects.includes(item.id)?
                                <span className={css.checked}>√</span>
                                :<span className={css.unchecked}></span>
                            }
                            <img src={item.url} alt="" />
                        </div>
                    ))
                }
          </div>
        </div>
      )
    }
  }
  
  export default SelectPic