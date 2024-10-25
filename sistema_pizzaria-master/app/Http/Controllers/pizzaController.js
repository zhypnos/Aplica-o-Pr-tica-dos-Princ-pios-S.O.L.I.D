const Pizza = require('../models/Pizza');

// Existing functions (like visualize)

// Update pizza
exports.updatePizza = async (req, res) => {
    try {
        const updatedPizza = await pizzaService.updatePizza(req.params.id, req.body);
        res.status(200).json({ message: 'Pizza atualizada com sucesso', updatedPizza });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar a pizza', error });
    }
};