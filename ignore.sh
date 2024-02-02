# This bash script is runned by vercel when a commit is pushed.
# It defines whether or not a commit must be deployed.
# More info at https://vercel.com/docs/projects/overview#ignored-build-step

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "dev" || "$VERCEL_GIT_COMMIT_REF" == "main"  ]] ; then
  # Proceed with the build
  echo "Build can proceed"
  exit 1;

else
  # Don't build
  echo "Build cancelled"
  exit 0;
fi