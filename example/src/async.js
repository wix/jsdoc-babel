/**
 * Downloads and processes data from specified URL
 * @param {String} url - Location for resource to be processed.
 */
export async function getProcessedData(url) {
  let data;

  try {
    data = await downloadData(url);
  } catch (error) {
    data = await downloadFallbackData(url);
  }

  return processDataInWorker(data);
}
