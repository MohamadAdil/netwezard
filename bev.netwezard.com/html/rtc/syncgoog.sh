#!/usr/bin/env bash
gsutil -m rsync -x '.git/*' -R . gs://rtc-funnel

gcloud compute url-maps invalidate-cdn-cache rtc-funnel-lb --path "/*"
