/////	Welcome to the Hall of Mirrors!

//This is where terms are seen and unseen! This should be a master list of ALL of them. If this needs to splinter one day, so be it, but I think it's best to be in one place.
//I am defining a "term" as words and phrases that are contextually referenced in scripts and need to have both plaintext and regex versions of themselves, swappable for Spanish automatically.

//You can either use getTerm(name, language) to get it by name (and language), in which case the short forms of .plain and .regex will work,
//You probably don't want to call terms directly. But maybe you do. Just keep it such that you don't have to rewrite the script to change languages!

//example of a call and use:
//
//var term_example = getTerm('example', current_package.language);
//...
//html.push('<h3>' + term_example.plain + '</h3>');
//...
//if(context.match(term_example.regex)) ...

var terms = [
{name: 'example', en: 'example', sp: 'ejemplo', regex_en: new RegExp('example', 'i'), regex_sp: new RegExp('ejempl.', 'i')},

//lesson
{name: 'learning_targets', en: 'Learning Targets', sp: 'Objetivos de aprendizaje', regex_en: new RegExp('Learning\\sTargets', 'i'), regex_sp: new RegExp('Objetivos\\sde\\saprendizaje', 'i')},
{name: 'integrated_ield', en: 'Integrated iELD', sp: 'Apoyar el desarrollo del idioma espa&ntilde;ol', regex_en: new RegExp('Integrated\\s*i?ELD', 'i'), regex_sp: new RegExp('Apoyar\\sel\\sdesarrollo\\s*?\\n?\\s*?del\\sidioma\\sespa.ol', 'im')},
{name: 'supporting_eld', en: 'Supporting English Language Development', sp: 'Apoyar el desarrollo del idioma espa&ntilde;ol', regex_en: new RegExp('Supporting\\sEnglish\\sLanguage\\sDevelopment', 'i'), regex_sp: new RegExp('Apoyar\\sel\\sdesarrollo\\sdel\\sidioma\\sespa.ol', 'i')},
{name: 'additional_materials', en: 'Additional Materials', sp: 'Materiales adicionales', regex_en: new RegExp('additional\\smaterial', 'i'), regex_sp: new RegExp('material(es)?\\sadicional', 'i')},
{name: 'ield', en: 'iELD', sp: 'AE', regex_en: new RegExp('ield', 'i'), regex_sp: new RegExp('AE', '')},
{name: 'weekly_presentation', en: 'Weekly Presentation:', sp: 'Presentaci&oacute;n semanal', regex_en: new RegExp('Weekly\\sPresentation:', 'i'), regex_sp: new RegExp('presentaci.n\\ssemanal', 'i')}, //with colon
{name: 'el', en: 'EL', sp: 'AE', regex_en: new RegExp('^el', 'i'), regex_sp: new RegExp('^ae', 'i')},
{name: 'checktosee', en: 'Check to See', sp: 'Comprobar', regex_en: new RegExp('^checktosee', 'i'), regex_sp: new RegExp('^Comprobar:', 'i')}, //condensed
{name: 'checktoseespecial', en: 'Check to See', sp: 'Comprobar', regex_en: new RegExp('(<div class="col-xs-12">(\\r|\\n)<p>\\s?(<strong>)?Check to see)', 'img'), regex_sp: new RegExp('(<div class="col-xs-12">(\\r|\\n)<p>(<strong>)?Comprobar)', 'img')}, //condensed
{name: 'card_combo', en: '', sp: '', regex_en: new RegExp('e(-|\&ndash\;)?pocket\\schart|elkonin\\sboxes|Sound-Spelling\\sCard|Frieze\\sCard|Picture\\sWord\sCard', 'ig'), regex_sp: new RegExp('tablero\\se(-|\&ndash\;)?pocket|cajas?\\selkonin|Tarjetas?\\sde\\ssonido\\sy\\sdeletreo|Tarjetas?\\sde\\svocabulario\\silustrada|Tarjetas?\\sde\\simagen', 'ig')},
// {name: 'msl', en: 'MSL', sp: '', regex_en: new RegExp('msl', 'i'), regex_sp: new RegExp('', 'i')},
{name: 'quick_links', en: 'Quick Links', sp: 'enlaces directos', regex_en: new RegExp('Quick\\sLinks', 'i'), regex_sp: new RegExp('enlaces\\sdirectos', 'i')},
{name: 'observation_checklist', en: 'Observation Checklist for Constructive Conversation', sp: 'Tabla de observaci&oacuten para la conversaci&oacuten constructiva', regex_en: new RegExp('^Observation\\sChecklist', 'i'), regex_sp: new RegExp('Tabla de observaci.n\\spara\\sla\\sconversaci.n\\sconstructiva', 'i')},
{name: 'small_group_instruction', en: 'Small-Group Instruction', sp: 'Instrucci&oacute;n para Grupos peque&ntilde;os', regex_en: new RegExp('^Small.Group\\sInstruction', 'i'), regex_sp: new RegExp('Instrucci.n\\spara\\sGrupos\\speque.os', 'i')},
// {name: 'replace_optional', en: '', sp: '', regex_en: new RegExp('(optional)', 'i'), regex_sp: new RegExp('()', 'i')},
{name: 'handwriting_practice', en: 'Handwriting', sp: 'Caligraf&iacute;a', regex_en: new RegExp('^handwriting', 'i'), regex_sp: new RegExp('^Caligraf.a', 'i')},
{name: 'conferring_prompt', en: 'Conferring Prompt', sp: 'Consulta r&aacute;pida', regex_en: new RegExp('conferring\\sprompt', 'i'), regex_sp: new RegExp('Consulta\\sr.pida', 'i')}, //the regex is more likely to pick up the sample conferring prompt

{name: 'community_connection', en: 'Community Connection', sp: 'Conexi&oacute;n con la comunidad', regex_en: new RegExp('^Community\\sConnection', 'i'), regex_sp: new RegExp('^Conexi.n\\scon\\sla\\scomunidad', 'i')},
{name: 'sing_swing_learn', en: 'Play the unit song throughout the unit', sp: 'Reproduzca la cancion de la unidad a lo largo de la unidad', regex_en: new RegExp('^Play\\sthe\\sunit\\ssong\\sthroughout\\sthe\\sunit', 'i'), regex_sp: new RegExp('^Reproduzca\\sla\\scancion\\sde\\sla\\sunidad\\sa\\slo\\slargo\\sde\\sla\\sunidad', 'i')},
{name: 'mentor_writing_prompt', en: 'Mentor Writing Prompt', sp: 'Pauta modelo de escritura', regex_en: new RegExp('^\\w+\\sWriting\\sPrompt', 'i'), regex_sp: new RegExp('^Pauta\\smodelo\\sde\\sescritura', 'i')},
{name: 'student_writing_prompt', en: 'Student Writing Prompt', sp: 'Pauta de escritura del estudiante', regex_en: new RegExp('^Student\\sWriting\\sPrompt', 'i'), regex_sp: new RegExp('^Pauta\\sde\\sescritura\\sdel\\sestudiante', 'i')},
{name: 'developing_vocabulary', en: 'Developing Vocabulary', sp: 'Desarrollar el vocabulario', regex_en: new RegExp('^Developing\\sVocabulary', 'i'), regex_sp: new RegExp('Desarrollar\\sel\\svocabulario', 'i')},
{name: 'grammar', en: 'Grammar:', sp: 'Gram&aacute;tica', regex_en: new RegExp('^Grammar:', 'i'), regex_sp: new RegExp('^Gram.tica:', 'i')},
{name: 'pd_tip', en: 'PD TIP', sp: 'DP Tip', regex_en: new RegExp('^PD\\sTIP', 'i'), regex_sp: new RegExp('^DP\\sTip', 'i')},
{name: 'possible_response', en: 'Possible Response', sp: 'Repuesta posible', regex_en: new RegExp('^Possible\\sResponse', 'i'), regex_sp: new RegExp('^Repuesta\\sposible', 'i')},
// {name: 'sample_conferring_prompt', en: 'Sample Conferring Prompt', sp: '', regex_en: new RegExp('^Sample\\sConferring\\sPrompt', 'i'), regex_sp: new RegExp('', 'i')},
{name: 'small_group', en: 'Small-Group', sp: 'Grupos peque&ntilde;os', regex_en: new RegExp('Small.Group', 'i'), regex_sp: new RegExp('Grupos\\speque.os', 'i')}, //maybe too vague? //NOT USED FOR SECTION FUNCTION
{name: 'small_group_phonics_title', en: 'Small-Group and Independent Practice', sp: 'Pr&aacute;ctica independiente y en grupos peque&ntilde;os', regex_en: new RegExp('Small.Group\\sand\\sIndependent\\sPractice', 'i'), regex_sp: new RegExp('Pr.ctica\\sindependiente\\sy\\sen\\sgrupos\\speque.os', 'i')}, 
{name: 'small_group_phonics_sentence', en: 'Use the following activities during small-group time to reteach and reinforce the whole-group mini-lesson.', sp: 'Use las siguientes actividades durante el tiempo en grupos peque\ntilde;os para repasar y reforzar la minilecci\oacute;n de toda la clase.', regex_en: new RegExp('^Use\\sthe\\sfollowing\\sactivities\\sduring\\ssmall.group\\stime\\sto\\sreteach\\sand\\sreinforce\\sthe\\swhole.group\\smini.lesson.', 'i'), regex_sp: new RegExp('^U\\w+\\slas\\ssiguientes\\sactividades.*?minilecci', 'i')},
// {name: 'teqc', en: 'TEQC', sp: 'Tarjetas de preguntas de evidencia en el texto', regex_en: new RegExp('TEQC', 'i'), regex_sp: new RegExp('', 'i')},
{name: 'teqc_big_title', en: 'Text Evidence Questions', sp: 'Preguntas de evidencia en el texto', regex_en: new RegExp('^Text\\sEvidence\\sQuestions?$', 'i'), regex_sp: new RegExp('^Preguntas?\\sde\\sevidencia\\sen\\sel\\stexto$', 'i')},
{name: 'buildreflectwrite', en: 'BUILDREFLECTWRITE', sp: 'AMPLIARREFLEXIONARESCRIBIR', regex_en: new RegExp('^BUILD\\s?REFLECT\\s?WRITE', 'i'), regex_sp: new RegExp('^AMPLIAR\\s?REFLEXIONAR\\s?ESCRIBIR', 'i')}, //NOT USED FOR SECTION FUNCTION
{name: 'language_transfer_support', en: 'Language<br>Transfer Support', sp: 'Apoyo para<br>la transferencia del lenguaje', regex_en: new RegExp('^Language\\s?\\n?Transfer\\sSupport', 'im'), regex_sp: new RegExp('^(Apoyo\\spara\\s?\\n?la\\stransferencia\\sdel\\slenguaje|Transferencia\\sde\\ssonido\\sy\\sarticulaci.n\\s?\\n?entre\\sespa.ol\\se\\singl.s)', 'i')},
{name: 'advance_preparation', en: 'Advance Preparation', sp: 'Preparaci&oacute;n', regex_en: new RegExp('^Advance\\sPreparation', 'i'), regex_sp: new RegExp('^Preparaci.n', 'i')},
{name: 'ways_to_scaffold', en: 'Ways to Scaffold', sp: 'Maneras de usar en el andamiaje', regex_en: new RegExp('^Ways\\sto\\sScaffold', 'i'), regex_sp: new RegExp('^Maneras\\sde\\susar\\sen\\sel\\sandamiaje', 'i')},
// {name: '', en: '', sp: '', regex_en: new RegExp('', 'i'), regex_sp: new RegExp('', 'i')}, //NOT USED FOR SECTION FUNCTION
{name: 'secrl', en: 'Social-Emotional & Culturally Responsive Learning', sp: 'Aprendizaje socioemocional y de sensibilidad cultural', regex_en: new RegExp('^Social.Emotional\\s(&|and)\\sCulturally.Responsive\\sLearning', 'i'), regex_sp: new RegExp('^Aprendizaje\\ssocioemocional\\sy\\sde\\ssensibilidad\\scultural', 'i')},
{name: 'real_world_action', en: 'Real World Action', sp: 'Acciones en el mundo real', regex_en: new RegExp('^Real\\sWorld\\sAction', 'i'), regex_sp: new RegExp('^Acciones\\sen\\sel\\smundo\\sreal', 'i')},
{name: 'formative_assessment', en: 'Formative Assessment', sp: 'Evaluaci&oacute;n formativa', regex_en: new RegExp('^Formative(\\s|\\r|\\n)+Assessment', 'i'), regex_sp: new RegExp('Evaluaci.n\\sformativa', 'i')}, //NOT USED FOR SECTION FUNCTION
{name: 'check_for_transferability', en: 'Check for transferability', sp: 'Comprobar si hay transferencia', regex_en: new RegExp('^Check\\sfor\\stransferability', 'i'), regex_sp: new RegExp('Comprobar\\ssi\\shay\\stransferencia', 'i')}, //Language Transfer Support keyword, it always starts with this
{name: 'corrective_feedback', en: 'Corrective Feedback', sp: 'Rutina para los comentarios gu&iacute;a', regex_en: new RegExp('^Corrective\\sFeedback', 'i'), regex_sp: new RegExp('^Rutina\\spara\\slos\\scomentarios\\sgu.a', 'i')} //I don't think this is in Spanish
// {name: 'model_introduce_practice_challenge', en: '', sp: '', regex_en: new RegExp('Model|Introduce|Practice|Challenge', 'i'), regex_sp: new RegExp('', 'i')} //Language Transfer Support keyword, it always starts with this
// {name: '', en: '', sp: '', regex_en: new RegExp('', 'i'), regex_sp: new RegExp('', 'i')},

//MISSING:

//real world action (in indd)
//essential question

//might not be used:
// {name: 'independent_practice', en: 'Independent Practice', sp: '', regex_en: new RegExp('Independent\\sPractice', 'i'), regex_sp: new RegExp('', 'i')},
// {name: 'music_library', en: 'Benchmark Universe Music Library', sp: 'Bibiloteca música de Benchmark Universe', regex_en: new RegExp('^Benchmark(\\s|\\r|\\n)*Universe(\\s|\\r|\\n)*Music.Library', 'i'), regex_sp: new RegExp('^Biblioteca.*m.sica(\\s|\\r|\\n)*de(\\s|\\r|\\n)*Benchmark(\\s|\\r|\\n)*Universe', 'i')}
// {name: 'vowelpattern', en: 'Vowel Pattern', sp: 'ejemplo', regex_en: new RegExp('example', 'i'), regex_sp: new RegExp('ejempl.', 'i')}
]

function getTerm(name, language)
{
	for(var t = 0; t < terms.length; t++)
	{
		if(terms[t].name == name)
		{
			if(language.match(/en/i))
			{
				return {plain: terms[t].en, regex: terms[t].regex_en};
			}
			else(language.match(/sp/i))
			{
				return {plain: terms[t].sp, regex: terms[t].regex_sp};
			}
		}
	}
}