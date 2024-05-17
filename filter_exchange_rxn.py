from cobra.io import read_sbml_model,write_sbml_model


model1 = read_sbml_model('Filter_exchange_reactions_after_monensin_pathway_addition\\Streptomyces_cinamonensis_CarVeMe_model\\SC73020_Streptomyces_cinamonensis_CarVeMe_model.xml')

model2 = read_sbml_model('Filter_exchange_reactions_after_monensin_pathway_addition\\Streptomyces_coelicolor_model\\SC73020_Streptomyces_coelicolor_model.xml')

model2_li = [R.id for R in model2.exchanges if R.lower_bound < 0]

model1_li = [R.id for R in model1.exchanges if R.lower_bound < 0]

model1_un = [x for x in model1_li if x not in model2_li]

print(len(model1_un))

for x in model1_un:
    model1.reactions.get_by_id(x).lower_bound = 0

for x in model1_un:
    model1.reactions.get_by_id(x).lower_bound