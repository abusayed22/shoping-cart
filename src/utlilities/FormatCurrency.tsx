
const currency = new Intl.NumberFormat(undefined , {
    currency: "USD", style: "currency"
});

export const formatCurreny = ( number : number) => {
    return currency.format(number)
}