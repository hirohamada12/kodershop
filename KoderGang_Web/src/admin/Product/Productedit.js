/**
 *  Admin Site Product Edit Page
 */
import React, {Component} from 'react';
import {Container} from 'reactstrap';
import ProductEditDetail from '../ProductEditDetail';
import ProductService from "../../services/ProductService";


class Productedit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllProduct: [],
            ProductId: parseInt(this.props.match.params.id),
            CurrentProduct: null
        };
        this.service = new ProductService();
    }

    UNSAFE_componentWillMount = async () => {
        await this.onLoadProduct();
    };

    onLoadProduct = async () => {
        await this.service.getAll({}, async result => {
            this.setState({
                AllProduct: result.data,
            })
        })
    };

    render() {
        const Productedit = this.state.AllProduct.find(item => this.state.ProductId = item.id);
        console.log(Productedit);
        return (
            <div>
                {Productedit ?
                    <div className="site-content">
                        <div className="content-wrapper section-ptb">
                            <Container>
                                <ProductEditDetail product={Productedit}/>
                            </Container>
                        </div>
                    </div>

                    :
                    null
                }
            </div>
        )
    }
}

export default Productedit;
