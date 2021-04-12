/*
 * Normalização de estruturas
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que realize a
 * normalização da estrutura representada pela variável input de
 * forma que o retorno seja compatível com a variável output
 *
 */

/*
 * [INPUT] Object
 * {
 *   "id": "6197b77e-3942-11ea-a137-2e728ce88125",
 *   "user": {
 *     "id": "6197ba94",
 *     "name": "Laura"
 *   },
 *   "reports": [
 *     {
 *       "id": "51ddf1a9",
 *       "result": {
 *         "document": "356.4325-10",
 *         "status": "em análise",
 *       }
 *     }
 *   ]
 * }
 *
 * [OUTPUT] Object
 *  {
 *   "results": {
 *     "6197b77e-3942-11ea-a137-2e728ce88125": {
 *       id: "6197b77e-3942-11ea-a137-2e728ce88125",
 *       user: "6197ba94",
 *       reports: ["51ddf1a9"]
 *     }
 *   },
 *   "users": {
 *     "6197ba94": { "id": "6197ba94", "name": "Laura" }
 *   },
 *   "reports": {
 *     "51ddf1a9": {
 *        "id": "51ddf1a9",
 *        "user": "6197ba94",
 *        "document": "356.4325-10",
 *        "status": "em análise",
 *      }
 *    }
 *  }
 */

const normalizeData = (unormalized) => {
  const { id, user, reports } = unormalized;
  const normalized = {
    results: {
      [id]: { id, user: user.id, reports: reports.map((report) => report.id) },
    },
    users: { [user.id]: user },
  };

  for (const report of reports) {
    normalized.reports = {
      ...normalized.reports,
      [report.id]: {
        id: report.id,
        user: user.id,
        document: report.result.document,
        status: report.result.status,
      },
    };
  }

  return normalized;
}

module.exports = normalizeData
