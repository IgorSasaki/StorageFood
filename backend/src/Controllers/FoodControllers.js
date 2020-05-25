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
    },
    async index(request, response) {
        const alimentos = await connection('alimentos').select('*');

        return response.json(alimentos);
    },
    async delete(request, response) {
        const { id } = request.params;

        await connection('alimentos')
            .where('id', id)
            .delete();

        return response.status(204).send();
    },
}