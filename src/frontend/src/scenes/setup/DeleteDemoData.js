import React from 'react'
import { kea, useActions, useValues } from 'kea'
import api from '../../lib/api'
import { Button } from 'antd'

const deleteDemoDataLogic = kea({
    actions: () => ({
        deleteDemoData: true,
        demoDataDeleted: true,
    }),
    reducers: ({ actions }) => ({
        isDeleted: [
            false,
            {
                [actions.demoDataDeleted]: () => true,
            },
        ],
    }),
    listeners: ({ actions, values }) => ({
        [actions.deleteDemoData]: async () => {
            try {
                const user = await api.get('delete_demo_data')
                actions.demoDataDeleted()
            } catch (error) {
                throw error
            }
        },
    }),
})
const deleteAllDataLogic = kea({
    actions: () => ({
        deleteDemoData: true,
        demoDataDeleted: true,
    }),
    reducers: ({ actions }) => ({
        isDeleted: [
            false,
            {
                [actions.demoDataDeleted]: () => true,
            },
        ],
    }),
    listeners: ({ actions, values }) => ({
        [actions.deleteDemoData]: async () => {
            try {
                const user = await api.get('delete_all_data')
                actions.demoDataDeleted()
            } catch (error) {
                throw error
            }
        },
    }),
})

export function DeleteDemoData() {
    const { isDeleted } = useValues(deleteDemoDataLogic)
    const { deleteDemoData } = useActions(deleteDemoDataLogic)
    const { isDeletedAll } = useValues(deleteAllDataLogic)
    const { deleteAllData } = useActions(deleteAllDataLogic)
    return (
        <div>
            <Button type="primary" danger onClick={deleteDemoData}>
                Delete demo data
            </Button>
            <Button type="primary" danger onClick={deleteAllData}>
                Delete all data
            </Button>
            {isDeleted && <p className="text-success">Demo data deleted!</p>}
            {isDeletedAll && <p className="text-success">All data deleted!</p>}
        </div>
    )
}
