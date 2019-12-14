import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        let { items } = this.props
        return (
            <div className="itemCom">
                {
                    <div className="itemMainItem">
                        <h3>{items.name}</h3>
                        {
                            items.foods && items.foods.map((it, i) => {
                                return (
                                    <dl key={i}>
                                        <dt>
                                            <img src={it.image} alt="" />
                                        </dt>
                                        <dd>
                                            <p>{it.name}</p>
                                        </dd>
                                    </dl>
                                )
                            })
                        }
                    </div>
                    // items && items.map((item, index) => {
                    //     return (
                    //         <div className={'rightMain' + index} key={index}>
                    //             <h3>{item.name}</h3>
                    //             {
                    //                 item.foods && item.foods.map((it, i) => {
                    //                     return (
                    //                         <dl key={i}>
                    //                             <dt>
                    //                                 <img src={it.image} alt="" />
                    //                             </dt>
                    //                             <dd>
                    //                                 <p>{it.name}</p>
                    //                             </dd>
                    //                         </dl>
                    //                     )
                    //                 })
                    //             }
                    //         </div>
                    //     )
                    // })
                }
            </div>
        )
    }
}
