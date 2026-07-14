# Guide de publication du site Permasauvage

> Le site est déjà publié. Ce guide sert à le modifier, le publier et le vérifier depuis le navigateur.

## Ce qu'il y a dans le dossier

| Fichier | Rôle |
|---|---|
| `index.html` | La page d'accueil (tout le site tient sur cette page). |
| `style.css` | L'habillage : couleurs, typographie, mise en page. |
| `mentions-legales.html` | Page légale obligatoire (le site collecte des emails). |
| `merci.html` | Petite page de remerciement optionnelle après un message. |
| `MISE-EN-LIGNE.md` | Ce guide. Il ne sera pas visible sur le site. |

**Pour voir le site tout de suite** : double-clique sur `index.html`. Il s'ouvre dans ton navigateur. Tant que le site n'est pas en ligne, il n'est visible que sur ton ordinateur : tu peux itérer tranquillement.

**Pour modifier un fichier** : clic droit sur le fichier, « Ouvrir avec », puis « Bloc-notes » (ou tout autre éditeur de texte). Enregistre, puis actualise la page dans le navigateur pour voir le résultat.

---

## Étape 1 : vérifier les mentions légales

Avant une première annonce large ou une modification de cette page, vérifie que `mentions-legales.html` ne contient plus de texte provisoire et respecte les règles de confidentialité du site. Les obligations légales exactes dépendent de la situation de l'association : vérifier une source officielle avant d'ajouter une donnée personnelle.

---

## Étape 2 : brancher la liste Systeme.io

Le formulaire « Recevoir les nouvelles » est intégré à Systeme.io. Pour le relier à la liste de l'association :

1. Connecte-toi à Systeme.io et crée un tunnel avec une étape **Formulaire intégré**.
2. Dans l'étape, crée une règle d'automatisation : déclencheur **Inscription au formulaire de l'étape du tunnel**, action **Ajouter une étiquette**, puis choisis l'étiquette de la liste de l'association.
3. Clique sur **Script** dans l'étape et copie le code fourni.
4. Ouvre `index.html` et remplace le script existant de Systeme.io par le nouveau script.
5. Enregistre, puis teste l'inscription avec une adresse email qui n'est pas encore dans les contacts.

Active la confirmation par email si elle est disponible dans la configuration de la liste. C'est la pratique propre, et elle protège l'association.

---

## Étape 3 : brancher le formulaire de contact

Un site hébergé gratuitement ne sait pas envoyer d'emails tout seul. On utilise un petit service gratuit qui fait facteur : **Web3Forms** (250 messages par mois, largement assez, sans compte à créer).

1. Va sur `web3forms.com`.
2. Entre l'adresse email de l'association (celle qui doit recevoir les messages) et valide.
3. Tu reçois par email une **clé d'accès** (une suite de lettres et de chiffres).
4. Ouvre `index.html` avec le Bloc-notes et cherche `VOTRE_CLE_WEB3FORMS`.
5. Remplace `VOTRE_CLE_WEB3FORMS` par ta clé, en gardant les guillemets autour.
6. Enregistre. Le formulaire est branché (le test réel se fera une fois le site en ligne, à l'étape 5).

Alternative si un jour Web3Forms ne convient plus : Formspree (formspree.io) fonctionne sur le même principe, avec un compte et un tableau de bord (50 messages par mois en gratuit).

---

## Étape 4 : publier sur GitHub Pages

Le site est hébergé gratuitement par GitHub Pages dans l'organisation `Permasauvage`, dépôt `permasauvage.github.io`.

1. Connecte-toi à GitHub et ouvre le dépôt `Permasauvage/permasauvage.github.io`.
2. Dépose ou modifie les fichiers `index.html`, `style.css`, `mentions-legales.html` et `merci.html` selon le changement souhaité. Ne dépose pas ce guide.
3. Clique sur **Commit changes** sur la branche `main`.
4. Attends une à deux minutes, puis vérifie `https://permasauvage.github.io/`.
5. Si nécessaire, vérifie `Settings > Pages` : source **Deploy from a branch**, branche `main`, dossier `/(root)` et HTTPS activé.

---

## Étape 5 : tester en conditions réelles

- [ ] Ouvre le site en ligne sur ton téléphone et sur l'ordinateur.
- [ ] Inscris une de tes adresses email dans le formulaire de nouvelles : vérifie qu'elle arrive bien dans Systeme.io avec l'étiquette attendue.
- [ ] Envoie-toi un message via le formulaire de contact : vérifie qu'il arrive dans la boîte de l'association.
- [ ] Clique sur « Mentions légales » : vérifie qu'il ne reste aucun passage orange à compléter.

### Option : page de merci personnalisée

Par défaut, après l'envoi d'un message, le visiteur voit une page de confirmation standard du service facteur. Pour afficher notre page `merci.html` à la place : ouvre `index.html`, cherche `ADRESSE-DU-SITE`, suis les instructions du commentaire juste au-dessus (retirer les marqueurs `<!--` et `-->` de la ligne et y mettre l'adresse réelle du site).

---

## Mettre à jour le site plus tard

Deux façons, au choix :

- **Directement en ligne** : sur github.com, ouvre `Permasauvage/permasauvage.github.io`, clique sur le fichier à modifier puis sur le petit crayon en haut à droite. Modifie, puis **Commit changes** sur `main`. Le site se met à jour en une à deux minutes.
- **Depuis l'ordinateur** : modifie le fichier local, puis re-dépose-le dans `Permasauvage/permasauvage.github.io` sur `main` (bouton **Add file** puis **Upload files**) : il remplace l'ancien.

Garde le dossier local comme copie de travail : c'est ton original.

---

## Avant d'annoncer le site largement

- [ ] Relire la section « Prochain rendez-vous » avec Marie et valider le texte à deux.
- [ ] Mentions légales complétées (étape 1).
- [ ] Les deux formulaires branchés et testés (étapes 2, 3 et 5).
