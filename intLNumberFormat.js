const money = 1000.32555

function formatMoney (money, locale, currency) {
    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency
        }).format(money);
    } catch (error) {
        console.error('Erro ao formatar moeda:', error.message);
        return money
    }
}

console.log(formatMoney(money, 'pt-BR', 'BRL'))