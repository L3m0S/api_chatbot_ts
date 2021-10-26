import { mongoose} from "../database/mongodb";

const AlterarDataSchema = new mongoose.Schema({
        id: {
            type: uuid,
            required: true,
            
        }
        nome: {
            type: String,
            required: true
        },

        tel: {
            type: String,
            require: true
        },
    
        interesse: {
            type: String,
            require: true,
            default: "Alterar Data de Vencimento"
        },
    
        documento: {
            type: String,
            require: true
        },
        vencimento: {
            type: String,
            require: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
});

const ChamadoAlterarData = mongoose.model('alterardata', AlterarDataSchema);

export { ChamadoAlterarData };