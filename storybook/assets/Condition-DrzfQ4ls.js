const e={cardNumber:4,expirationDate:2,userName:20},a={cardNumber:/^\d{4}$/,month:/^(0[1-9]|1[0-2])$/,year:/^\d{2}$/,userName:/^[A-Z]+\s[A-Z]+$/},s={MAX_LENGTH:e,REG_EXP:a,hiddenCardNumber:"*",splitSlash:"/",showVisa:r=>String(r)[0]==="4",showMasterCard:r=>String(r)[0]==="5"&&["1","2","3","4","5"].includes(String(r)[1])};export{s as C};
