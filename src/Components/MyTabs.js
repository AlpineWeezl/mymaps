import React, { useEffect, useState } from 'react'
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import MyMap from './MyMap'
import axios from 'axios';
import { Map } from 'pigeon-maps';

const MyTabs = () => {
    const [categories, setCategories] = useState(null);
    const [places, setPlaces] = useState(null);

    useEffect(() => {
        axios.get('MyPlaces.json').then(res => {
            setCategories(res.data.categories);
            setPlaces(res.data.places);
        });
    }, []);

    return (
        <>
            {(categories && places) ? (
                <Tabs>
                    <TabList>
                        {
                            categories.map(
                                (category) => {
                                    return (
                                        <>
                                            <Tab key={`tabListItem_${category.categoryId}`}>{category.name}</Tab>
                                        </>
                                    )
                                }
                            )
                        }
                    </TabList>
                    {
                        categories.map(
                            (category) => {
                                return (
                                    <TabPanel key={`tabPanel_${category.categoryId}`}>
                                        <Map key={`mapItem_${category.categoryId}`} height={900} defaultCenter={[47.584102, 10.5410919]} defaultZoom={9}>
                                            {
                                                places.map(
                                                    (place) => {
                                                        {
                                                            places.map((place) => {
                                                                return (
                                                                    (place.categoryId === category.categoryId) ? (<MyMap key={`place${place.placeId}`} place={place} />) : ('')
                                                                );
                                                            })
                                                        }
                                                    }
                                                )
                                            }
                                        </Map>
                                    </TabPanel>
                                )
                            }
                        )
                    }
                </Tabs>
            ) : (
                <div>Loading...</div>
            )}
        </>
    )
}



export default MyTabs