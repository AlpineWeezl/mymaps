import React from 'react'
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import MyMap from './MyMap'

const myPlaces = [
    {
        category_id: 0,
        category: 'Home',
        places: [
            {
                name: 'Home',
                lat: 47.584102,
                long: 10.5410919
            }
        ],
    },
    {
        category_id: 1,
        category: 'Schools',
        places: [
            {
                name: 'Volksschule Pfronten',
                lat: 47.579446,
                long: 10.5586562
            },
            {
                name: 'Technikerschule Allgäu',
                lat: 47.7191664,
                long: 10.3165116
            },
            {
                name: 'WBS Training AG Kempten',
                lat: 47.7243881,
                long: 10.3211964
            }
        ]
    },
    {
        category_id: 2,
        category: 'Favorite Places',
        places: [
            {
                name: 'Volksschule Pfronten',
                lat: 47.579446,
                long: 10.5586562
            },
            {
                name: 'Technikerschule Allgäu',
                lat: 47.7191664,
                long: 10.3165116
            },
            {
                name: 'WBS Training AG Kempten',
                lat: 47.7243881,
                long: 10.3211964
            }
        ]
    }
]

const MyTabs = () => {
    return (
        <Tabs>
            <TabList>
                {myPlaces.map((myPlace) => {
                    return <Tab key={`tab_${myPlace.category_id}`}>{myPlace.category}</Tab>
                })
                }
            </TabList>

            {myPlaces.map((myPlace) => {
                return (
                    <TabPanel key={`tabPanel${myPlace.category_id}`}>
                        <MyMap places={myPlace.places} />
                    </TabPanel>
                )
            })
            }
        </Tabs>
    )
}

export default MyTabs