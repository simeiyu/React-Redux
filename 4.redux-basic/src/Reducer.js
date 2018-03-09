import * as ActionTypes from './ActionTypes'

export default (state, action) => {
    const {counterCaption} = action
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {...state, [counterCaption]: state[counterCaption] + 1}
            // 不可以是{...state, [counterCaption]: state[counterCaption++]}，因为++运算会修改state[counterCaption]的值。reducer必须是一个纯函数，不能产生任何的副作用。
        case ActionTypes.DECREMENT:
            return {...state, [counterCaption]: state[counterCaption] - 1}
        default:
            return state
    }
}