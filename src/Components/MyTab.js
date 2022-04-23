import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyMap from './MyMap';

export default () => (
    <Tabs>
        <TabList>
            <Tab>Home</Tab>
            <Tab>Schools</Tab>
            <Tab>Favorite Places</Tab>
            <Tab>Working Places, so far</Tab>
        </TabList>

        <TabPanel key={'tabHome'}>
            <MyMap lat={['47.584102']} long={['10.5410919']} />
        </TabPanel>
        <TabPanel key={'tabSchools'}>
            <MyMap lat={['47.584102']} long={['10.5410919']} />
        </TabPanel>
        <TabPanel key={'tabFavorite'}>
            <MyMap lat={['47.584102']} long={['10.5410919']} />
        </TabPanel>
        <TabPanel key={'tabWork'}>
            <MyMap lat={['47.5241211', '47.7121255']} long={['10.2796891', 10.3197081]} />
        </TabPanel>

    </Tabs>
);