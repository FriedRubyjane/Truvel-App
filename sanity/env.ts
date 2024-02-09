export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-09'

export const dataset = assertValue(
	'production',
	'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
	'ac6sq4v6',
	'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
	if (v === undefined) {
		throw new Error(errorMessage)
	}

	return v
}
