exports.up = function(knex) {
    return knex.schema.createTable('alimentos', function (table) {
        table.increments();
        table.string('descricao').notNullable();
        table.string('unidade').notNullable();
        table.real('medida').notNullable();
        table.integer('quantidade').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('alimentos');
};
