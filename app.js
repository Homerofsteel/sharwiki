import { updateTableWithPBData } from 'httpdocs/script.js';  // Importation de la fonction depuis api.js
import { schedule } from 'node-cron';  // Utilisation de node-cron pour la planification
import fetch from 'node-fetch';  // Si nécessaire pour fetch

// Fonction pour actualiser le tableau avec les données PB
async function updateTableWithPBDataPeriodically() {
  console.log('Récupération des données PB...');
  await updateTableWithPBData();  // Appel de la fonction importée de api.js
  console.log('Tableau mis à jour avec les nouvelles données PB');
}

// Cron job pour exécuter la récupération des données toutes les minutes
schedule('* * * * *', async () => {
  console.log('Actualisation des données...');
  await updateTableWithPBDataPeriodically();  // Actualiser toutes les minutes
});
