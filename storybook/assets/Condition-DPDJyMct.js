const d={cardNumber:4,expirationDate:2,userName:20,cvcNumber:3,password:2},i={cardNumber:{valid:/^\d+$/,invalid:/[^\d+$]/g},month:{valid:/^\d+$/,invalid:/[^\d+$]/g},year:{valid:/^\d+$/,invalid:/[^\d+$]/g},userName:{valid:/^[a-zA-Z\s]+$/,invalid:/[^a-zA-Z\s]+/},cvcNumber:{valid:/^\d+$/,invalid:/[^\d+$]/g},password:{valid:/^\d+$/,invalid:/[^\d+$]/g}},s={MAX_LENGTH:d,REG_EXP:i,hiddenCardNumber:"*",lastNameAndFirstName:a=>a.split(" ").length===2,splitSlash:"/",showVisa:a=>a[0]==="4",showMasterCard:a=>a[0]==="5"&&["1","2","3","4","5"].includes(a[1])};export{s as C};
