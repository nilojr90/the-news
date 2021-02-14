import topStoriesApi, { getKey } from 'services/top-stories';
import TopStoriesApiResponse from 'models/top-stories.model';

export default async function execute(
  session: string,
): Promise<TopStoriesApiResponse> {
  return await topStoriesApi.get('');
}
