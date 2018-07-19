import england from '../Img_source/england.jpg';
import china from '../Img_source/china.jpg';
import taiwan from '../Img_source/taiwan.jpg';
import spain from '../Img_source/spain.jpg';
import wales from '../Img_source/wales.jpg';
import brazil from '../Img_source/brazil.jpg';
import slovenia from '../Img_source/slovenia.jpg';
import italy from '../Img_source/italy.jpg';

export default function getTeamBox() {
        return [{
            image: england ,
            country: 'England',
            player1: 'Arron',
            player2: 'Zoltan',
        }, {
            image: china,
            country: 'China',
            player1: 'Justin',
            player2: 'Albert'
        }, {
            image: taiwan,
            country: 'Taiwan',
            player1: 'Justin',
            player2: 'Albert'
        }, {
            image: wales,
            country: 'Wales',
            player1: 'Dave',
            player2: ''
        }, {
            images: brazil,
            country: 'Brazil',
            player1: 'Damany',
            player2: 'Raj',
        }, {
            images: slovenia,
            country: 'Slovenia',
            player1: 'Vesna',
            player2: '',
        }, {
            images: italy,
            country: 'Italy',
            player1: 'Vicky',
            player2: '',
        
        }, {
            image: spain,
            country: 'Spain',
            player1: 'Chris',
            player2: 'Ricardo',
        }];
    }