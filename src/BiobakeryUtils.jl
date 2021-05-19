module BiobakeryUtils

export
    import_abundance_tables,
    import_abundance_table,
    clean_abundance_tables,
    taxfilter,
    taxfilter!,
    parsetaxa,
    parsetaxon,
    rm_strat!,
    permanova,
    humann2_regroup,
    humann2_rename,
    humann2_barplot,
    humann2_barplots,
    qvalue!,
    foo

using DataFrames
using Statistics
using CSV
using RCall
using Microbiome

include("general.jl")
include("metaphlan.jl")
include("humann2.jl")

end
