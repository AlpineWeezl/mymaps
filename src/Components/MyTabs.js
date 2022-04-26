import React, { useEffect, useState } from 'react'
import MyTab from './MyTab'
import axios from 'axios';
import Spinner from 'react-spinner-material';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


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
                <>
                    <Tabs value='0' key={`tabList`}>
                        <TabList>
                        {
                            categories.map(
                                (category) => {
                                    return (
                                        <Tab
                                            key={`tabListItem_${category.categoryId}`}
                                            >
                                                {category.categoryName}
                                        </Tab>
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
                                            <MyTab category={category} places={places} />
                                        </TabPanel>
                                    )
                                }
                            )
                        }
                    </Tabs>
                </>
            ) : (
                <Spinner radius={120} color={"#333"} stroke={2} visible={true} />
            )}
        </>
    )
}



export default MyTabs