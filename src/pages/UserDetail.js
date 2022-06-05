import React, { useState } from 'react';
import IncludedUsers from '../components/TargetUsers/IncludedUsers';
import RuleNewAdd from '../components/RuleNewAdd';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FlagList from '../components/FlagList';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import RuleNew from '../components/RuleNew';
import Targeting from './users/Targeting';
import Variation from './users/Variation';
import { makeStyles, withStyles } from "@material-ui/styles";
import { ButtonBase } from "@material-ui/core";
import './users/userstyles.css';

const StyledButton = withStyles(() => (
    {

        root: {
            // marginRight: "2rem",
            // width: "100%",
            padding: "0.8rem 1rem 0.8rem 1rem",
            fontSize: "1rem",
            // borderRadius: "0rem",
            color: "black",
            fontWeight: "600",
            textTransform: "capitalize",
            // backgroundColor: "#6FDFDF",
            // border: "2px solid white",
            // borderRadius: "5px",
            // fontFamily: "montserrat",
            // letterSpacing: "1px"
        }
    }))(ButtonBase);


const useStyles = makeStyles(() => ({
    buttonContainerWrapper: {
        display: "flex",
        justifyContent: "center"
    },
    buttonContainer: {
        // backgroundColor: "#ccc",
        // border: "1px solid #000",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between"
    },
    lastButtonFilter: {
        marginRight: "0rem"
    },
    activeButton: {
        // background: "#5534A5",
        color: "blue",
        borderBottom: "2.2px solid blue",
    }
}));


function UserDetail(props) {

    const { index } = useParams()
    const location = useLocation()
    const { itemName } = location.state


    const menu1 = [
        {
            name: 'Targeting',
            href: '#',
            current: <Targeting />
        }
    ]
    const menu2 = [
        {
            name: 'Variation',
            href: '#',
            current: <Variation />
        }
    ]


    const [tab, setTab] = useState(menu1);


    const handletab = (e) => {

        setTab(menu1);
        setActiveButton("first");
    }

    const handletab2 = (e) => {

        setTab(menu2);
        setActiveButton("second");
    }


    const [menu, setMenu] = useState()

    const classes = useStyles();
    const [activeButton, setActiveButton] = useState('first');






    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div className='userDetail'>

            <div className='segment-header' >

                <h1>
                    <Link to='/home' >
                        <u>Feature flags</u>
                    </Link>
                    <span style={{ color: 'black', marginLeft: '0px' }}> / {itemName}</span>
                </h1>
                <h2 className="mt-5 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{itemName}</h2>
            </div>
            <div>
                {/* <br /> */}
                {/* <div className='lineT' /> */}
                <br />
                <div className='bg-white px-4 rounded border border-gray-300'>
                    <div className='outer'>
                        <div className="inner">
                            <StyledButton
                                // className="btn-item"
                                className={activeButton === "first" ? `${classes.activeButton}` : ""}
                                onClick={handletab}

                            >
                                Targeting
                            </StyledButton>
                        </div>
                        <div className="inner">
                            <StyledButton
                                className={activeButton === "second" ? `${classes.activeButton}` : ""}
                                onClick={handletab2} >
                                Variation
                            </StyledButton>
                        </div>
                    </div>


                    {
                        tab && (Object.entries(tab).map(tab => {
                            // console.log(item)
                            return (
                                <div>
                                    <div className='brand-box'>



                                    </div>
                                    <div className='mainCont'>
                                        {tab.map(({ name, href, current }) => (


                                            <div className='current-t'>

                                                {current}
                                            </div>
                                        )
                                        )}     </div>
                                </div>
                            )
                        }))
                    }

                </div>

                <br />
            </div>
            {/* 
            <Link to='/userDetail/{index}/targeting'>
                click for flaglist
            </Link>
            <br />
            <Link to='/userDetail/{index}/variation'>
                click for ruleNew
            </Link>

            <Routes>
                <Route path='/targeting' element={<Targeting />} />
                <Route path='/variation' element={<Variation />} />
            </Routes> */}
        </div >

    )
}

export default UserDetail;