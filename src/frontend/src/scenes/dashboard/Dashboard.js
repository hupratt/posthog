import React, { Component } from 'react'
import { combineUrl } from 'kea-router'
import api from 'lib/api'
import { Link } from 'lib/components/Link'
import { DeleteWithUndo, Loading } from 'lib/utils'
import { FunnelViz } from '../funnels/FunnelViz'
import { ActionsLineGraph } from '../trends/ActionsLineGraph'
import { ActionsTable } from '../trends/ActionsTable'
import { ActionsPie } from '../trends/ActionsPie'
import { Dropdown } from 'lib/components/Dropdown'

export class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {}
        this.fetchDashboard = this.fetchDashboard.bind(this)
        this.fetchDashboard()
    }
    fetchDashboard() {
        api.get('api/dashboard').then(items => this.setState({ items: items.results }))
    }
    render() {
        let { items } = this.state
        let typeMap = {
            ActionsLineGraph: {
                element: ActionsLineGraph,
                link: filters => combineUrl('/trends', filters).url,
            },
            ActionsTable: {
                element: ActionsTable,
                link: filters => combineUrl('/trends', filters).url,
            },
            ActionsPie: {
                element: ActionsPie,
                link: filters => combineUrl('/trends', filters).url,
            },
            FunnelViz: {
                element: FunnelViz,
                link: filters => `/funnel/${filters.funnel_id}`,
            },
        }

        return (
            <div className="row">
                {items &&
                    items.length > 0 &&
                    items.map(item => {
                        let Panel = typeMap[item.type].element
                        Panel = <Panel dashboardItemId={item.id} filters={item.filters} />
                        return (
                            <div className="col-6" key={item.id}>
                                <div className="card">
                                    <h5 className="card-header">
                                        <Dropdown
                                            className="float-right"
                                            buttonStyle={{
                                                lineHeight: '1rem',
                                                color: 'var(--gray)',
                                                fontSize: '2rem',
                                            }}
                                        >
                                            <Link className="dropdown-item" to={typeMap[item.type].link(item.filters)}>
                                                View graph
                                            </Link>
                                            <DeleteWithUndo
                                                object={item}
                                                className="text-danger dropdown-item"
                                                endpoint="dashboard"
                                                callback={this.fetchDashboard}
                                            >
                                                Delete panel
                                            </DeleteWithUndo>
                                        </Dropdown>
                                        <Link to={typeMap[item.type].link(item.filters)}>{item.name}</Link>
                                    </h5>
                                    <div
                                        style={{
                                            overflowY: 'scroll',
                                            height: '25vh',
                                            maxHeight: '30vh',
                                            position: 'relative',
                                        }}
                                    >
                                        {Panel ? Panel : <Loading />}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                {items && this.props.user.has_events && items.length === 0 && (
                    <p>
                        You don't have any panels set up. <Link to="/trends">Click here to create one.</Link>
                    </p>
                )}
            </div>
        )
    }
}
