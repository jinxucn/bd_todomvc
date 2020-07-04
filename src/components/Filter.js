/*
 * @Author: Jin X
 * @Date: 2020-07-03 00:59:25
 * @LastEditTime: 2020-07-03 23:44:46
 */ 
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from "classnames";
import { setFilter } from "../redux/actions";
import { FILTERS } from "../redux/constants";

const Filters = () => {
    const numberLeft = useSelector(state => state.allIds.length);
    // const { ids, todos, filter } = { ...useSelector(state => state) };
    const currentFilter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    return numberLeft > 0 &&
        <div className="filters">
        <span className="numberLeft">{numberLeft + " todos left"}</span>
        {Object.keys(FILTERS).map(filterKey => {
            const filterName = FILTERS[filterKey];
            return <span
                key={`filter-${filterKey}`}
                className={cx("filter",
                    filterName === currentFilter && "filter-active")}
                onClick={() => dispatch(setFilter(filterName))}>
                {filterName}
            </span>
        })}
        </div>
};

export default Filters;