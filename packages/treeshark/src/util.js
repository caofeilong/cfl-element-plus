

export function c(user){
    console.info('a---',user)
}
export function d(user){
    console.info('b---')   
    return user.a
}

/*#__PURE__*/ d({a:'abc'})