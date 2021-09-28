var documenterSearchIndex = {"docs":
[{"location":"contributing/#Contributing","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"The BioJulia organisation has a set of contribution guidelines which apply to all BioJulia projects. These guidelines are available here and it is recommended all new contributors read these guidelines before opening a pull request.","category":"page"},{"location":"contributing/#Making-a-contribution","page":"Contributing","title":"Making a contribution","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"If you're interested in adding functionality to BiobakeryUtils.jl, please feel free to open an issue or a pull request (PR) against the main branch. If you're not yet ready for that, you can also ask questions/start a discussion in the #biology channel on slack or zulip, or using the biology domain on discourse.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Work-in-progress PRs are fine, as discussion about approach and code review can happen in the PR.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Before merging, any new code should be unit tested and have docs for newly exported functions, but if you don't know how to do this, don't worry, we can help!","category":"page"},{"location":"conda/","page":"Installing tools with Conda","title":"Installing tools with Conda","text":"CurrentModule = BiobakeryUtils","category":"page"},{"location":"conda/#Using-bioBakery-command-line-tools","page":"Installing tools with Conda","title":"Using bioBakery command line tools","text":"","category":"section"},{"location":"conda/","page":"Installing tools with Conda","title":"Installing tools with Conda","text":"Some functions provided by this package (eg humann_regroup and humann_rename), require the appropriate bioBakery tools to be installed and accessible from the julia shell environment. The easiest way to do this is to use Conda.jl, though other installation methods are possible as well.","category":"page"},{"location":"conda/#Using-a-previous-installation","page":"Installing tools with Conda","title":"Using a previous installation","text":"","category":"section"},{"location":"conda/","page":"Installing tools with Conda","title":"Installing tools with Conda","text":"Environmental variables in julia are stored in a Dict called ENV. For example, the $PATH variable in Unix tells the shell where to look for executable programs, and is available in julia using ENV[\"PATH\"]","category":"page"},{"location":"conda/","page":"Installing tools with Conda","title":"Installing tools with Conda","text":"ENV[\"PATH\"]","category":"page"},{"location":"conda/","page":"Installing tools with Conda","title":"Installing tools with Conda","text":"This variable is automatically populated with the $PATH variable from the shell from which you launched julia, so if you can access humann or metaphlan from your shell, then launch julia, you should be all set.","category":"page"},{"location":"conda/","page":"Installing tools with Conda","title":"Installing tools with Conda","text":"If not, you need to identify where humann or metaphlan executables are located, then add that location to ENV[\"PATH\"] (delimeted by :). For example, if the humann executable is found at /home/kevin/.local/bin, you would run:","category":"page"},{"location":"conda/","page":"Installing tools with Conda","title":"Installing tools with Conda","text":"ENV[\"PATH\"] = ENV[\"PATH\"] * \":\" * \"/home/kevin/.local/bin\"","category":"page"},{"location":"conda/#Using-Conda","page":"Installing tools with Conda","title":"Using Conda","text":"","category":"section"},{"location":"conda/","page":"Installing tools with Conda","title":"Installing tools with Conda","text":"If you don't have a previous installation, you can use Conda.jl to install the necessary tools. To do this, first install Conda.jl in your environment using the Pkg REPL (accessible by typing ] in the julia REPL - press <backspace> to get back to the regular REPL).","category":"page"},{"location":"conda/","page":"Installing tools with Conda","title":"Installing tools with Conda","text":"❯ mkdir my_project\n\n❯ cd my_project/\n\n❯ julia\n               _\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.6.1 (2021-04-23)\n _/ |\\__'_|_|_|\\__'_|  |  Official https://julialang.org/ release\n|__/                   |\n\njulia> # press ']'\n\n(@v1.6) pkg> activate .\n  Activating new environment at `~/.julia/dev/BiobakeryUtils/my_project/Project.toml`\n\n(my_project) pkg> add Conda\n    Updating registry at `~/.julia/registries/General`\n   Resolving package versions...\n    Updating `~/.julia/dev/BiobakeryUtils/my_project/Project.toml`\n  [8f4d0f93] + Conda v1.5.2\n    Updating `~/.julia/dev/BiobakeryUtils/my_project/Manifest.toml`\n  [8f4d0f93] + Conda v1.5.2\n  [682c06a0] + JSON v0.21.2\n  [69de0a69] + Parsers v2.0.4\n  [81def892] + VersionParsing v1.2.0\n  [ade2ca70] + Dates\n  [a63ad114] + Mmap\n  [de0858da] + Printf\n  [4ec0a83e] + Unicode\n\njulia> using Conda\n\njulia> Conda.add(\"humann\", :biobakery; channel=\"bioconda\")\n[ Info: Running conda install -y -c bioconda humann in biobakery environment\nCollecting package metadata (current_repodata.json): done\nSolving environment: done\n# ...","category":"page"},{"location":"conda/","page":"Installing tools with Conda","title":"Installing tools with Conda","text":"By default, Conda.jl puts environments into ~/.julia/conda/envs/<env name>, so in this case, you'd next want to run","category":"page"},{"location":"conda/","page":"Installing tools with Conda","title":"Installing tools with Conda","text":"ENV[\"PATH\"] = ENV[\"PATH\"] * \":\" * expanduser(\"~/.julia/conda/envs/biobakery/bin\")","category":"page"},{"location":"general/#General","page":"General Utilities","title":"General","text":"","category":"section"},{"location":"general/","page":"General Utilities","title":"General Utilities","text":"Modules = [BiobakeryUtils]\nPages = [\"general.jl\"]","category":"page"},{"location":"general/#BiobakeryUtils.import_abundance_table-Tuple{AbstractString}","page":"General Utilities","title":"BiobakeryUtils.import_abundance_table","text":"import_abundance_table(file::AbstractString; delim::Char='\t')\n\nGiven a file path or paths to abundance tables (eg humann2 or metaphlan2), create abundance table. Table is presumed to have samples in columns and features in rows. First column is taken as feature IDs.\n\n\n\n\n\n","category":"method"},{"location":"general/#BiobakeryUtils.permanova","page":"General Utilities","title":"BiobakeryUtils.permanova","text":"permanova(dm::Array{<:Real,2}, metadata::AbstractVector, nperm::Int=999;\n            label=nothing, datafilter=x->true)\npermanova(dm::Array{<:Real,2}, metadata::AbstractDataFrame, nperm=999;\n            fields=names(metadata), kwargs...)\n\nPerforms PERMANOVA analysis from R's vegan package using the adonis function.\n\nPositional arguments:\n\ndm: a symetric distance matrix.\nmetadata: either a vector of numerical or categorical data to test against, or a DataFrame with columns for each variable to test against. Any missing data in the vector or rows of the DataFrame with missing data will be filtered out.\nnperm=999: number of permutations for PERMANOVA.\n\nKeyword Arguments:\n\ndatafilter=x-> true: a function to filter elements (or rows) of metadata. Removal of missing values occurs before this function is applied.\nlabel=nothing: If provided, adds a column label to the results filled with this value. Useful if performing multiple runs that will be combined in a single DataFrame.\nfields: if passing a DataFrame as metadata, an array of symbols may be passed to select only certain columns and/or determine their order for the resulting PERMANOVA.\n\nNote: this will throw an error if vegan is not installed. To install:\n\nusing RCall\n\nreval(\"install.packages('vegan')\")\n\n\n\n\n\n","category":"function"},{"location":"humann/#HUMAnN2","page":"Working with HUMAnN","title":"HUMAnN2","text":"","category":"section"},{"location":"humann/","page":"Working with HUMAnN","title":"Working with HUMAnN","text":"Modules = [BiobakeryUtils]\nPages = [\"humann.jl\"]","category":"page"},{"location":"humann/#BiobakeryUtils.humann_regroup-Tuple{DataFrames.AbstractDataFrame}","page":"Working with HUMAnN","title":"BiobakeryUtils.humann_regroup","text":"function humann_regroup(df::AbstractDataFrame; inkind=\"uniref90\", outkind::String=\"ec\")\n\nWrapper for humann_regroup script, replaces first column of a DataFrame with results from regrouping inkind to outkind.\n\nRequires installation of humann available in ENV[\"PATH\"]. See \"Using Conda\" for more information.\n\n\n\n\n\n","category":"method"},{"location":"humann/#BiobakeryUtils.humann_rename-Tuple{DataFrames.AbstractDataFrame}","page":"Working with HUMAnN","title":"BiobakeryUtils.humann_rename","text":"humann_rename(df::AbstractDataFrame; kind::String=\"ec\")\n\nWrapper for humann_rename script, replaces first column of a DataFrame with results from renaming inkind to outkind.\n\nRequires installation of humann available in ENV[\"PATH\"]. See \"Using Conda\" for more information.\n\n\n\n\n\n","category":"method"},{"location":"#BiobakeryUtils","page":"BiobakeryUtils","title":"BiobakeryUtils","text":"","category":"section"},{"location":"#Contents","page":"BiobakeryUtils","title":"Contents","text":"","category":"section"},{"location":"","page":"BiobakeryUtils","title":"BiobakeryUtils","text":"Pages = [\"general.md\", \"conda.md\", \"metaphlan.md\", \"humann.md\"]\nDepth = 6","category":"page"},{"location":"metaphlan/#MetaPhlAn2","page":"Working with MetaPhlAn","title":"MetaPhlAn2","text":"","category":"section"},{"location":"metaphlan/","page":"Working with MetaPhlAn","title":"Working with MetaPhlAn","text":"Modules = [BiobakeryUtils]\nPages = [\"metaphlan.jl\"]","category":"page"},{"location":"metaphlan/#BiobakeryUtils.metaphlan_profiles-Tuple{Any}","page":"Working with MetaPhlAn","title":"BiobakeryUtils.metaphlan_profiles","text":"Option1: take a path to merged table (eg test/files/metaphlanmultiprofile.tsv)     and make CommunityProfile\n\nOption2: take vector of paths to single tables (eg [\"test/files/metaphlansingle1profile.tsv\", \"test/files/metaphlansingle2profile.tsv\"])     and make CommunityProfile\n\n\n\n\n\n","category":"method"},{"location":"metaphlan/#BiobakeryUtils.parsetaxa-Tuple{AbstractString}","page":"Working with MetaPhlAn","title":"BiobakeryUtils.parsetaxa","text":"parsetaxa(taxstring::AbstractString; throw_error=true)\n\nGiven a string representing taxonmic levels as formatted by MetaPhlAn (eg \"kBacteria|pProteobacteria...\"), separates taxonomic levels into elements of type Taxon in a vector.\n\nExamples ≡≡≡≡≡≡≡≡≡≡\n\njulia> parsetaxa(\"k__Archaea|p__Euryarchaeota|c__Methanobacteria\"; throw_error = true)\n3-element Vector{Taxon}:\n Taxon(\"Archaea\", :kingdom)\n Taxon(\"Euryarchaeota\", :phylum)\n Taxon(\"Methanobacteria\", :class)\n\n\n\n\n\n","category":"method"},{"location":"metaphlan/#BiobakeryUtils.parsetaxon-Tuple{AbstractString}","page":"Working with MetaPhlAn","title":"BiobakeryUtils.parsetaxon","text":"parsetaxon(taxstring::AbstractString, taxlevel::Union{Int, Symbol})\n\nFinds given taxonomic level in a string (as formatted by MetaPhlAn (eg \"kBacteria|pProteobacteria...\")) and returns the clade and taxonomic level as a Taxon. If taxon level not given, function will return the most specific (lowest) taxonomic level available.\n\nLevels may be given either as numbers or symbols:\n\n1 = :kingdom\n2 = :phylum\n3 = :class\n4 = :order\n5 = :family\n6 = :genus\n7 = :species\n8 = :subspecies\n\nExamples ≡≡≡≡≡≡≡≡≡≡\n\njulia> parsetaxon(\"k__Archaea|p__Euryarchaeota|c__Methanobacteria\", 2)\nTaxon(\"Euryarchaeota\", :phylum)\n\njulia> parsetaxon(\"k__Archaea|p__Euryarchaeota|c__Methanobacteria\", :kingdom)\nTaxon(\"Archaea\", :kingdom)\n\njulia> parsetaxon(\"k__Archaea|p__Euryarchaeota|c__Methanobacteria\")\nTaxon(\"Methanobacteria\", :class)\n\n\n\n\n\n","category":"method"},{"location":"metaphlan/#BiobakeryUtils.taxfilter!","page":"Working with MetaPhlAn","title":"BiobakeryUtils.taxfilter!","text":"taxfilter!(df::DataFrame, level::Union{Int, Symbol}; keepunidentified::Bool)\n\nFilter a MetaPhlAn table (as DataFrame) to a particular taxon level. Levels may be given either as numbers or symbols:\n\n1 = :kingdom\n2 = :phylum\n3 = :class\n4 = :order\n5 = :family\n6 = :genus\n7 = :species\n8 = :subspecies\n\nTaxon level is removed from resulting taxon string, eg. g__Bifidobacterium becomes Bifidobacterium.\n\nSet keepunidentified flag to false to remove UNIDENTIFIED rows.\n\ntaxfilter!() modifies the dataframe that you pass to it and taxfilter() doesn't.\n\nThis function will also rename the taxa in the first column.\n\n\nExamples\n≡≡≡≡≡≡≡≡≡≡\njulia> df\n4×2 DataFrame\n Row │ taxon                          abundance \n     │ String                         Float64   \n─────┼──────────────────────────────────────────\n   1 │ k__Bacteria                     100.0\n   2 │ k__Bacteria|p__Firmicutes        63.1582\n   3 │ k__Bacteria|p__Bacteroidetes     25.6038\n   4 │ k__Bacteria|p__Actinobacteria    11.0898\n\njulia> taxfilter(df,2; keepunidentified=true)\n4×2 DataFrame\n Row │ taxon            abundance \n     │ String           Float64   \n─────┼────────────────────────────\n   1 │ Firmicutes         63.1582\n   2 │ Bacteroidetes      25.6038\n   3 │ Actinobacteria     11.0898\n   4 │ Verrucomicrobia     0.1482\n\njulia> df\n4×2 DataFrame\n Row │ taxon                          abundance \n     │ String                         Float64   \n─────┼──────────────────────────────────────────\n   1 │ k__Bacteria                     100.0\n   2 │ k__Bacteria|p__Firmicutes        63.1582\n   3 │ k__Bacteria|p__Bacteroidetes     25.6038\n   4 │ k__Bacteria|p__Actinobacteria    11.0898\n\njulia> taxfilter!(df,2; keepunidentified=true)\n3×2 DataFrame\n Row │ taxon           abundance \n     │ String          Float64   \n─────┼───────────────────────────\n   1 │ Firmicutes        63.1582\n   2 │ Bacteroidetes     25.6038\n   3 │ Actinobacteria    11.0898\n\njulia> df\n3×2 DataFrame\n Row │ taxon           abundance \n     │ String          Float64   \n─────┼───────────────────────────\n   1 │ Firmicutes        63.1582\n   2 │ Bacteroidetes     25.6038\n   3 │ Actinobacteria    11.0898\n\njulia> taxfilter!(df,1; keepunidentified=true)\n3×2 DataFrame\n Row │ taxon           abundance \n     │ String          Float64   \n─────┼───────────────────────────\n   1 │ Firmicutes        63.1582\n   2 │ Bacteroidetes     25.6038\n   3 │ Actinobacteria    11.0898\n   \n\n\n\n\n\n","category":"function"}]
}
