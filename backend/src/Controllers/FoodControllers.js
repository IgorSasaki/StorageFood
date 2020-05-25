const connection = require('../Database/connection');

module.exports = {
    async create(request, response) {
        var { descricao, unidade, medida, quantidade } = request.body;

        const [id] = await connection('alimentos')
            .insert({
                descricao,
                unidade,
                medida,
                quantidade
            })

        return response.json({ id });
    }
}