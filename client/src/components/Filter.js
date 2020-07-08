/*
 * @Author: Jin X
 * @Date: 2020-07-03 00:59:25
 * @LastEditTime: 2020-07-07 00:06:09
 */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import { setFilter, toggleAll, removeCompleted } from "../redux/actions";
import { FILTERS } from "../redux/constants";

const Filters = () => {
    const numberLeft = useSelector((state) => state.allIds.length);
    // const { ids, todos, filter } = { ...useSelector(state => state) };
    const currentFilter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    return (
        numberLeft > 0 && (
            <div className="filters">
                <button className="toggle-all" onClick={()=>dispatch(toggleAll())}>All</button>
                <span className="number-left">{numberLeft + " todos left"}</span>
                {/* <input type="checkbox" className="toggleAll"  */}
                {Object.keys(FILTERS).map((filterKey) => {
                    const filterName = FILTERS[filterKey];
                    return (
                        <span
                            key={`filter-${filterKey}`}
                            className={cx(
                                "filter",
                                filterName === currentFilter && "filter-active"
                            )}
                            onClick={() => dispatch(setFilter(filterName))}
                        >
                            {filterName}
                        </span>
                    );
                })}
                <a className="remove-completed" onClick={()=>dispatch(removeCompleted())}>remove completed</a>
            </div>
        )
    );
};

export default Filters;
